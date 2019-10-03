import React from 'react'
import {Link} from 'react-router-dom'

export default function ProfileGeneralStatus() {
    return (
        <>
            <section className="section">
                <div>
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <div className="columns">
                                <div className="column is-half">
                                    <figure className="image">
                                        <img src="./chart-example.png" alt="chart" />
                                    </figure>
                                </div>
                                <div className="column is-half">
                                    <h1 className="subtitle">Resumen</h1>
                                    <h1 className="title">Tu estado general</h1>
                                    <p>Status: <b>Intransmisible</b></p>
                                    <p className="is-size-7">¡Felicidades! Corrobora esta información con tu médico de cabecera.</p>
                                    <p>Fecha de tu último análisis: <b>27/09/2019</b></p>
                                    <p>Fecha de tu próximo análisis: <b>Sin agendar </b><Link to="/">Agendar ahora</Link></p>
                                    <button className="button is-danger">Ir a análisis</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
