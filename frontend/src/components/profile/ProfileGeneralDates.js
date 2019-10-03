import React from 'react'

export default function ProfileGeneralDates() {
    return (
        <>
            <section className="section">
                <div>
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <hr />
                            <h1 className="title">Tus citas</h1>
                            <p className="subtitle">Agenda tus citas y revisiones para mantenerte en buen estado.</p>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <div className="tile is-ancestor scrolling-wrapper-flexbox">
                                <div className="tile is-vertical is-3 cardd">
                                    <div className="tile">
                                        <div className="tile is-parent is-vertical">
                                            <div>
                                                <figure className="image">
                                                    <img src="./calendar.jpg" alt="calendar" />
                                                </figure>
                                            </div>
                                            <article className="tile is-child notification is-light">
                                                <p className="title">Cita análisis</p>
                                                <p>Tipo de cita: <b>Análisis</b></p>
                                                <p>Dónde: <b>Laboratorios Hernández</b></p>
                                                <p>Cuándo: <b>12/10/2019</b></p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile is-vertical is-3 cardd">
                                    <div className="tile">
                                        <div className="tile is-parent is-vertical">
                                            <div>
                                                <figure className="image">
                                                    <img src="./calendar.jpg" alt="calendar" />
                                                </figure>
                                            </div>
                                            <article className="tile is-child notification is-light">
                                                <p className="title">Cita Dr. Juan Manuel</p>
                                                <p>Tipo de cita: <b>Revisión</b></p>
                                                <p>Dónde: <b>Clínica Condesa</b></p>
                                                <p>Cuándo: <b>15/10/2019</b></p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile is-vertical is-3 cardd">
                                    <div className="tile">
                                        <div className="tile is-parent is-vertical">
                                            <div>
                                                <figure className="image">
                                                    <img src="./calendar.jpg" alt="calendar" />
                                                </figure>
                                            </div>
                                            <article className="tile is-child notification is-light">
                                                <p className="title">Cita Dr. Gerardo Espino</p>
                                                <p>Tipo de cita: <b>Especialista</b></p>
                                                <p>Dónde: <b>Clínica Faro</b></p>
                                                <p>Cuándo: <b>20/10/2019</b></p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile is-vertical is-3 cardd">
                                    <div className="tile">
                                        <div className="tile is-parent is-vertical">
                                            <div>
                                                <figure className="image">
                                                    <img src="./calendar.jpg" alt="calendar" />
                                                </figure>
                                            </div>
                                            <article className="tile is-child notification is-light">
                                                <p className="title">Cita Dr. Juan Manuel</p>
                                                <p>Tipo de cita: <b>Revisión</b></p>
                                                <p>Dónde: <b>Clínica Condesa</b></p>
                                                <p>Cuándo: <b>31/10/2019</b></p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile is-vertical is-3 cardd">
                                    <div className="tile">
                                        <div className="tile is-parent is-vertical">
                                            <div>
                                                <figure className="image">
                                                    <img src="./calendar.jpg" alt="calendar" />
                                                </figure>
                                            </div>
                                            <article className="tile is-child notification is-light">
                                                <p className="title">Cita Dr. Juan Manuel</p>
                                                <p>Tipo de cita: <b>Revisión</b></p>
                                                <p>Dónde: <b>Clínica Condesa</b></p>
                                                <p>Cuándo: <b>15/10/2019</b></p>
                                            </article>
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
