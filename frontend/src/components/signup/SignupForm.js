import React from 'react'
import {Link} from 'react-router-dom'

export default function SignupForm() {
    return (
        <>
            <section className="hero is-danger is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-three-quarters">
                                <div className="box is-centered">
                                    <h1 className="title has-text-grey-dark">Crear cuenta</h1>
                                    <hr />
                                    <form action="">
                                        <div className="field">
                                            <label className="label">Nombre</label>
                                        </div>
                                        <div className="field is-horizontal">
                                            <div className="field-body">
                                                <div className="field">
                                                    <div className="control">
                                                        <input className="input" type="text" placeholder="Luis" />
                                                        <p className="help">No es obligatorio, compártelo sólo si lo deseas.</p>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="control">
                                                        <input className="input" type="text" placeholder="Pérez" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Avatar*</label>
                                            <div className="control has-icons-left has-icons-right">
                                                <input className="input" type="text" placeholder="LP-1992" />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                            </div>
                                            <p className="help">Con este nombre accederás a tu perfil privado.</p>
                                        </div>
                                        <div className="field">
                                            <label className="label">Correo electrónico</label>
                                            <div className="control has-icons-left has-icons-right">
                                                <input className="input" type="email" placeholder="lp_1992@correo.com" />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-envelope"></i>
                                                </span>
                                            </div>
                                            <p className="help">En este correo recibirás tus recordatorios y notificaciones.</p>
                                        </div>
                                        <div className="field">
                                            <label className="label">Contraseña</label>
                                            <p className="control has-icons-left">
                                                <input className="input" type="password" placeholder="Contraseña" />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-lock"></i>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <label className="checkbox">
                                                    <input type="checkbox" />
                                                    Acepto los <Link to="/">Términos de uso de la plataforma</Link>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="field is-grouped">
                                            <div className="control">
                                                <button className="button is-link">Crear cuenta</button>
                                            </div>
                                            <div className="control">
                                                <button className="button is-text">Volver a inicio</button>
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
        </>
    )
}
