import React from 'react'
import {Link} from 'react-router-dom'

export default function ProfileHeader({user}) {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <figure className="image is-128x128">
                                <img className="is-rounded" src={user.profilePhoto} alt="placeholder"/>
                            </figure>
                        </div>
                        <div className="column is-half">
                            <h1 className="subtitle">{user.name} {user.lastname}</h1>
                            <h1 className="title">{user.username}</h1>
                            <p className="subtitle">Sexo<br/>Status</p>
                            <button className="button is-danger">Editar perfil</button>


                            <div className="modal is-active">
                                <div className="modal-background"></div>
                                <div className="modal-card">
                                    <header className="modal-card-head">
                                        <p className="modal-card-title"><b>Agregar medicación al esquema</b></p>
                                        <button className="delete" aria-label="close"></button>
                                    </header>
                                    <section className="modal-card-body">

                                    <form onSubmit="">
                                                <div className="field">
                                                    <label className="label">Fecha de la muestra</label>
                                                    <div className="control">
                                                        <input onChange="" className="input" name="username" type="date" placeholder="LP-1992" required />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <label className="label">Conteo de cd4</label>
                                                    <div className="control">
                                                        <input onChange="" className="input" name="username" type="text" placeholder="LP-1992" required />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <label className="label">Carga viral</label>
                                                    <div className="control">
                                                        <input onChange="" className="input" name="username" type="text" placeholder="LP-1992" required />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <label className="label">Triglicéridos</label>
                                                    <div className="control">
                                                        <input onChange="" className="input" name="username" type="text" placeholder="LP-1992" required />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <label className="label">Fn. hepática</label>
                                                    <div className="control">
                                                        <input onChange="" className="input" name="username" type="text" placeholder="LP-1992" required />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <label className="label">Fn. renal</label>
                                                    <div className="control">
                                                        <input onChange="" className="input" name="username" type="text" placeholder="LP-1992" required />
                                                    </div>
                                                </div>
                                                <div className="field is-grouped">
                                                    <div className="control">
                                                        <button className="button is-link">Guardar esquema</button>
                                                    </div>
                                                </div>
                                            </form>
                                    

                                    </section>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
