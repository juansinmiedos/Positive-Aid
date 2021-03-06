import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AUTH_SERVICE from '../../services/auth';
import { MyContext } from '../../context';

export default class Navbar extends Component {
    state = {
        user: {},
        response: {}
    }

    handleInput = (e) => {
        const { user } = this.state;
        const key = e.target.name;
        user[key] = e.target.value;
        this.setState({ user });
    };

    onSubmit = async(e) => {
        try{
            e.preventDefault();
            const response = await AUTH_SERVICE.login(this.state.user)
            this.context.toLogIn(response.data.user);
            this.props.history.push('/perfil');
        } catch(err){
            console.log(err);
        }
    };

    sessionChecker = () =>{
        const sessionaux = this.context.state.loggedChecker
        if(sessionaux == null){
            return(
                <div className="buttons">
                    <form onSubmit={this.onSubmit}>
                        <div className="field is-grouped">
                            <div className="field-body">
                                <div className="field">
                                    <div className="control has-icons-left">
                                        <input className="input" onChange={this.handleInput} name="username" type="text" placeholder="Avatar" />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-user"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control has-icons-left">
                                        <input className="input" onChange={this.handleInput} name="password" type="password" placeholder="Contraseña" />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="control">
                                        <button className="button button-white-paddingless">Iniciar sesión</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        } else {
            return(
                <div className="buttons">
                    <Link to="/perfil"><button className="button button-white-paddingless">Ir a perfil</button></Link>
                    <button onClick={this.context.toLogOut} className="button button-red-paddingless">Cerrar sesión</button>
                </div>
            )
        }
    }

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
                            {/* <Link to="/" className="navbar-item">Inicio</Link>
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
                            </div> */}
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                {this.sessionChecker()}
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

Navbar.contextType = MyContext;
