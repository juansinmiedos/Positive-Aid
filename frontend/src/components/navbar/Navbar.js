import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AUTH_SERVICE from '../../services/auth';

export default class Navbar extends Component {
    state = {
        user: {}
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
            this.context.logUser(response.data.user);
            this.props.history.push('/perfil');
        })
        .catch((error) => {
            console.log(error);
        });
    };

    render(){
        return (
            <>
                <nav className="navbar is-danger is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            <h1>+aid</h1>
                        </Link>
    
                        <Link to="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </Link>
                    </div>
    
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link to="/" className="navbar-item">Inicio</Link>
                            <Link to="/" className="navbar-item">¿Qué es +aid?</Link>
                            <Link to="/" className="navbar-item">Seguridad</Link>
                                    
                            <div className="navbar-item has-dropdown is-hoverable">
                                <Link to="/" className="navbar-link">Páginas públicas</Link>
                                        
                                <div className="navbar-dropdown">
                                    <Link to="/" className="navbar-item">El VIH/SIDA</Link>
                                    <Link to="/" className="navbar-item">VIH y drogas</Link>
                                    <Link to="/" className="navbar-item">VIH y enfermedades</Link>
                                    <Link to="/" className="navbar-item">Vivir con VIH</Link>
                                    <hr className="navbar-divider" />
                                    <Link to="/" className="navbar-item">Reportar discriminación</Link>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <form action="">
                                        <div className="field is-grouped">
                                            <div className="field-body">
                                                <div className="field">
                                                    <div className="control has-icons-left">
                                                        <input className="input" name="username" type="text" placeholder="Avatar" />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-user"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="control has-icons-left">
                                                        <input className="input" name="password" type="password" placeholder="Contraseña" />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-lock"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="control">
                                                        <button className="button is-link">Iniciar sesión</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
