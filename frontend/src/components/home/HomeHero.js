import React from 'react'
import {Link} from 'react-router-dom'

export default function HomeHero() {

    const sessionChecker = () => {
        const sessionaux = JSON.parse(localStorage.getItem('user'))
        if(sessionaux == null){
            return(
                <Link to="/crear-cuenta"><button className="button is-link">Crear una cuenta</button></Link>
            )
        }
    }

    return (
        <>
            <section className="hero is-danger is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-size-1">+aid</h1>
                        <h2 className="subtitle is-size-4">Una plataforma para ayudarte a vivir mejor.</h2>
                        {sessionChecker()}
                    </div>
                </div>
                <div className="hero-foot"></div>
            </section>

            <section className="section heigh75">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-full">
                            <h1 className="title">¿Qué es +aid?</h1>
                            <p className="subtitle">Somos una plataforma diseñada para ayudar a quienes viven con VIH a dar un mejor seguimiento a su tratamiento y mantener un control de citas y medicamentos.<br />Encuentra también información general actualizada sobre el VIH y su tratamiento en nuestras páginas públicas.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section heigh75">
                <div className="columns is-centered">
                    <div className="column is-three-quarters">
                        <div className="columns">
                            <div className="column is-half">
                    
                            </div>
                            <div className="column is-half">
                                <h1 className="title">Tu información, segura</h1>
                                <p className="subtitle">Somos conscientes de lo sensible que es tu información, es por eso que no compartiremos con ningún tercero la información que confies en nuestra plataforma.<br /><br />No es necesario que des tu nombre y apellido, puedes crearla usando un avatar anónimo.</p>
                                <button className="button is-danger">Conoce cómo protegemos tu información</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
