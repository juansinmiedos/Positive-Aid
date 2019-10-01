import React from 'react'

export default function ProfileHeader() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <figure className="image is-128x128">
                                <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="placeholder"/>
                            </figure>
                        </div>
                        <div className="column is-half">
                            <h1 className="subtitle">Nombre Apellido</h1>
                            <h1 className="title">Avatar</h1>
                            <p className="subtitle">Sexo<br/>Status</p>
                            <button className="button is-danger">Editar perfil</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
