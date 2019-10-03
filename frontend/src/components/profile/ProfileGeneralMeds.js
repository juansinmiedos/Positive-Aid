import React from 'react'

export default function ProfileGeneralMeds() {
    return (
        <>
            <section className="section">
                <div className="is-centered">
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <hr />
                            <h1 className="title">Medicación</h1>
                            <p className="subtitle">Este es tu esquema actual</p>
                            <p>Has manejado este esquema desde: <b>25/02/2019</b></p>
                            <button className="button is-danger">Modificar esquema de medicación</button>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <div className="column is-full">
                                <div className="columns">
                                    <div className="column is-one-quarter">
                                        <img src="./meds.jpg" alt="meds" />
                                    </div>
                                    <div className="column is-three-quarters">
                                        <div className="box">
                                            <h1 className="title is-size-5">Nombre del medicamento</h1>
                                            <p className="subtitle is-size-5">Descripción breve del medicamento</p>
                                            <button className="button is-danger">Conocer más de este medicamento</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-full">
                                <div className="columns">
                                    <div className="column is-one-quarter">
                                        <img src="./meds.jpg" alt="meds" />
                                    </div>
                                    <div className="column is-three-quarters">
                                        <div className="box">
                                            <h1 className="title is-size-5">Nombre del medicamento</h1>
                                            <p className="subtitle is-size-5">Descripción breve del medicamento</p>
                                            <button className="button is-danger">Conocer más de este medicamento</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
