import React from 'react'
import {Redirect} from 'react-router-dom'

export default function AwaitConfirmation() {
    if(JSON.parse(localStorage.getItem('user')) != null){
        return <Redirect to='/perfil' />
    } else {
        return (
            <section className="hero is-danger is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-three-quarters">
                                <div className="box is-centered">
                                    <h1 className="title has-text-grey-dark">Confirma tu correo electrónico</h1>
                                    <hr />
                                        <p>Tu cuenta se ha creado exitosamente, sólo necesitamos que confirmes tu correo electrónico haciendo clic en el enlace que enviamos a tu correo electrónico.</p><br />
                                    <article className="message is-danger">
                                        <div className="message-body">
                                            Tu correo electrónico será usado única y exclusivamente para hacerte llegar notificaciones relacionadas a tus configuraciones personales.<br /> <br /> <b>No compartiremos nunca tu información con un tercero sin contar con tu autorización</b>.
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-foot"></div>
            </section>
        )
    }
}
