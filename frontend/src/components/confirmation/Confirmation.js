import React, { Component } from 'react';
import AUTH_SERVICE from '../../services/auth';
import {Link, Redirect} from 'react-router-dom'

export default class Confirmation extends Component {

    promiseOfConfirmation = async() => {
        console.log(this.props.match.params.id)
        await AUTH_SERVICE.confirm(this.props.match.params.id)
    }

    componentDidMount(){
        this.promiseOfConfirmation()
    }

    render() {
        if(JSON.parse(localStorage.getItem('user')) != null){
            return <Redirect to='/perfil' />
        } else {
            return (
                <>
                    <section className="hero is-danger is-fullheight">
                        <div className="hero-body">
                            <div className="container">
                                <div className="columns is-centered">
                                    <div className="column is-three-quarters">
                                        <div className="box is-centered">
                                            <h1 className="title has-text-grey-dark">¡Cuenta confirmada!</h1>
                                            <hr />
                                                <p>Tu cuenta ahora está activada para que puedas configurar tu esquema, registrar tus resultados y agendar tus citas.</p>
                                                <Link to="/iniciar-sesion"><button className="button button-red">Iniciar sesión</button></Link>
                                            <article className="message is-danger">
                                                <div className="message-body">
                                                    Tu cuenta será usada única y exclisivamente para hacerte llegar notificaciones relacionadas a tus configuraciones personales.<br /> <br /> <b>No compartiremos nunca tu información con un tercero sin contar con tu autorización</b>.
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
}
