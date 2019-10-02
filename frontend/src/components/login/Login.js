import React, { Component } from 'react'
import AUTH_SERVICE from '../../services/auth';
import {Link} from 'react-router-dom'

export default class Login extends Component {
    state = {
        user: {
            username: '',
            password: ''
        },
        response: {}
    }

    handleInput = (e) => {
        const { user } = this.state;
        const key = e.target.name;
        user[key] = e.target.value;
        this.setState({ user });
    };

    onSubmit = (e) => {
        e.preventDefault();
        AUTH_SERVICE.login(this.state.user)
        .then((response) => {

            const strUser = JSON.stringify(response.data.user)
            localStorage.setItem('user', strUser)
            this.props.history.push('/perfil');
        })
        .catch((error) => {
            console.log(error);
        });
    };

    render() {
        return (
            <>
                <section className="hero is-danger is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-three-quarters">
                                    <div className="box is-centered">
                                        <h1 className="title has-text-grey-dark">Iniciar sesión</h1>
                                        <hr />
                                        <form onSubmit={this.onSubmit}>
                                            <div className="field">
                                                <label className="label">Avatar</label>
                                                <div className="control has-icons-left has-icons-right">
                                                    <input className="input" onChange={this.handleInput} name="username" type="text" placeholder="LP-1992" />
                                                    <span className="icon is-small is-left">
                                                        <i className="fas fa-user"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label className="label">Contraseña</label>
                                                <p className="control has-icons-left">
                                                    <input className="input" onChange={this.handleInput} name="password" type="password" placeholder="Contraseña" />
                                                    <span className="icon is-small is-left">
                                                        <i className="fas fa-lock"></i>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="field is-grouped">
                                                <div className="control">
                                                    <button className="button is-link">Iniciar sesión</button>
                                                </div>
                                                <div className="control">
                                                    <Link to="/"><button className="button is-text">Volver a inicio</button></Link>
                                                </div>
                                            </div>
                                        </form>
                                        <hr />
                                        <article className="message is-danger">
                                            <div className="message-body">
                                                Nunca compartimos tus datos: Tu privacidad es importante para nosotros.
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-foot"></div>
                </section>
            </>
        )
    }
}