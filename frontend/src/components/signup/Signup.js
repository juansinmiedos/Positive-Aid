import React, { Component } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import {Link} from 'react-router-dom'
import AUTH_SERVICE from '../../services/auth';

export default class Signup extends Component {
    state = {
        user:{
            name: '',
            lastname: '',
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
        AUTH_SERVICE.signup(this.state.user)
        .then((response) => {
            console.log(response.data);
            this.props.history.push('/iniciar-sesion')
        })
        .catch((error) => {
            console.log(error);
        });
    };

    render(){
        return (
            <>
                <Navbar />
                <section className="hero is-danger is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-three-quarters">
                                    <div className="box is-centered">
                                        <h1 className="title has-text-grey-dark">Crear cuenta</h1>
                                        <hr />
                                        <form onSubmit={this.onSubmit}>
                                            <div className="field">
                                                <label className="label">Nombre</label>
                                            </div>
                                            <div className="field is-horizontal">
                                                <div className="field-body">
                                                    <div className="field">
                                                        <div className="control">
                                                            <input onChange={this.handleInput} className="input" name="name" type="text" placeholder="Luis" />
                                                            <p className="help">No es obligatorio, compártelo sólo si lo deseas.</p>
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <div className="control">
                                                            <input onChange={this.handleInput} className="input" name="lastname" type="text" placeholder="Pérez" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label className="label">Avatar*</label>
                                                <div className="control has-icons-left has-icons-right">
                                                    <input onChange={this.handleInput} className="input" name="username" type="text" placeholder="LP-1992" required />
                                                    <span className="icon is-small is-left">
                                                        <i className="fas fa-user"></i>
                                                    </span>
                                                </div>
                                                <p className="help">Con este nombre accederás a tu perfil privado.</p>
                                            </div>
                                            <div className="field">
                                                <label className="label">Correo electrónico*</label>
                                                <div className="control has-icons-left has-icons-right">
                                                    <input onChange={this.handleInput} className="input" name="email" type="email" placeholder="lp_1992@correo.com" required />
                                                    <span className="icon is-small is-left">
                                                        <i className="fas fa-envelope"></i>
                                                    </span>
                                                </div>
                                                <p className="help">En este correo recibirás tus recordatorios y notificaciones.</p>
                                            </div>
                                            <div className="field">
                                                <label className="label">Contraseña*</label>
                                                <p className="control has-icons-left">
                                                    <input onChange={this.handleInput} className="input" name="password" type="password" placeholder="Contraseña" required />
                                                    <span className="icon is-small is-left">
                                                        <i className="fas fa-lock"></i>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <div className="control">
                                                    <label className="checkbox">
                                                        <input type="checkbox" required />
                                                        Acepto los <Link to="/">Términos de uso de la plataforma</Link>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="field is-grouped">
                                                <div className="control">
                                                    <button className="button is-link">Crear cuenta</button>
                                                </div>
                                                <div className="control">
                                                    <Link to="/"><button className="button is-text">Volver a inicio</button></Link>
                                                </div>
                                            </div>
                                        </form>
                                        <hr />
                                        <article className="message is-danger">
                                            <div className="message-body">
                                                La información recopilada en este formulario es completamente confidencial y no se compartirá con ningún tercero a menos que tú lo solicites.
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-foot"></div>
                </section>
                <Footer />
            </>
        )
    }
}