import React, { Component } from 'react'
import { MyContext } from '../../context';

import Swal from 'sweetalert2'

import AUTH_SERVICE from '../../services/auth';

export default class ProfileHeader extends Component {
    state = {
        isOpen: false,
    }

    showEditForm = () => {
        if(this.state.isOpen === false){
            this.setState({
                isOpen: true
            })
        } else {
            this.setState({
                isOpen: false
            })
        }
    }

    handleInput = (e) => {
        const { user } = this.context.state;
        const key = e.target.name;
        user[key] = e.target.value;
        this.setState({ user });
        
    };

    submitEditForm = async(e) => {
        try{
            e.preventDefault()
            await AUTH_SERVICE.update(this.state.user)
            this.setState({user: this.state.user})

            Swal.fire({
                position: 'top-end',
                title: 'Perfil actualizado.',
                showConfirmButton: false,
                timer: 2000
            })

        } catch(error){
            console.log(error);
        }

        if(this.state.isOpen === false){
            this.setState({
                isOpen: true
            })
        } else {
            this.setState({
                isOpen: false
            })
        }
    }

    render(){
        return (
            <>
                <section className="section box-title profile-header">
                    <div>
                        <div className="columns is-centered">
                            <div className="column is-three-quarters">
                                <div className="columns is-vcentered">
                                    <div className="column is-one-quarter is-right">
                                            <img src={this.context.state.user.profilePhoto} alt="placeholder"/>
                                    </div>
                                    <div className="column is-three-quarters">
                                        <h1 className="subtitle profile-header-text">{this.context.state.user.name} {this.context.state.user.lastname}</h1>
                                        <h1 className="title profile-header-text"><i className="fa fa-user"></i>  {this.context.state.user.username}</h1>
                                        <p className="subtitle profile-header-text">Status actual: {this.context.state.user.status}</p>
                                        <button onClick={() => this.showEditForm()} className="button button-white"><i className="fa fa-edit"></i>&nbsp;Editar perfil</button>

                                        <div className={this.state.isOpen ? "modal is-active" : "modal"} >
                                            <div className="modal-background"></div>
                                            <div className="modal-card">
                                                <header className="modal-card-head">
                                                    <p className="modal-card-title"><b>Editar perfil</b></p>
                                                    <button onClick={() => this.showEditForm()} className="delete" aria-label="close"></button>
                                                </header>
                                                <section className="modal-card-body">
                                                    <form onSubmit={this.submitEditForm}>
                                                        <div className="field">
                                                            <label className="label">Nombre<span className="help">No es obligatorio, compártelo sólo si lo deseas.</span></label>
                                                        </div>
                                                        <div className="field is-horizontal">
                                                            <div className="field-body">
                                                                <div className="field">
                                                                    <div className="control">
                                                                        <input onChange={this.handleInput} className="input" name="name" type="text" placeholder="Luis" value={this.context.state.user.name} />
                                                                    </div>
                                                                </div>
                                                                <div className="field">
                                                                    <div className="control">
                                                                        <input onChange={this.handleInput} className="input" name="lastname" type="text" placeholder="Pérez" value={this.context.state.user.lastname} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="field">
                                                            <label className="label">Avatar</label>
                                                            <div className="control has-icons-left has-icons-right">
                                                                <input onChange={handleInput} className="input" name="username" type="text" placeholder="LP-1992" required value={user.username} />
                                                                <span className="icon is-small is-left">
                                                                    <i className="fas fa-user"></i>
                                                                </span>
                                                            </div>
                                                        </div> */}
                                                        <div className="field is-hidden">
                                                            <label className="label">ID</label>
                                                            <div className="control has-icons-left has-icons-right">
                                                                <input onChange={this.handleInput} className="input" name="_id" type="text" placeholder="LP-1992" required value={this.context.state.user._id} />
                                                                <span className="icon is-small is-left">
                                                                    <i className="fas fa-user"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="field is-grouped">
                                                            <div className="control">
                                                                <button className="button button-red">Editar perfil</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

ProfileHeader.contextType = MyContext;