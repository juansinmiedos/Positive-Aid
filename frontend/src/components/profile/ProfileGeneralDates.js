import React from 'react'

export default function ProfileGeneralDates({ showAppointmentsForm, appointmentsIsOpen, submitAppointmentsForm, handleInput, handleDateInput }) {
    return (
        <>
            <section className="section">
                <div>
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <hr />
                            <p className="subtitle">Calendario</p>
                            <h1 className="title">Tus citas</h1>
                            <p>Agenda tus citas y revisiones para mantenerte en buen estado.</p>
                            <button onClick={() => showAppointmentsForm()} className="button is-danger">Agendar nueva cita</button>

                            <div className={appointmentsIsOpen ? "modal is-active" : "modal"}>
                                <div className="modal-background"></div>
                                <div className="modal-card">
                                    <header className="modal-card-head">
                                        <p className="modal-card-title"><b>Nueva cita</b></p>
                                        <button onClick={() => showAppointmentsForm()} className="delete" aria-label="close"></button>
                                    </header>
                                    <section className="modal-card-body">

                                        <form onSubmit={submitAppointmentsForm} >
                                            <div className="field">
                                                <label className="label">Tipo de cita</label>
                                            </div>
                                            <div className="field is-horizontal">
                                                <div className="field-body">
                                                    <div className="field">
                                                        <div className="control">
                                                            <div className="select">
                                                                <select onChange={handleInput} name="typeOfAppointment">
                                                                    <option>Selecciona un tipo de cita</option>
                                                                    <option value="revision" >Cita de revisión médica</option>
                                                                    <option value="analisis" >Cita de análisis</option>
                                                                    <option value="otro" >Otro</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label className="label">¿Con quién?</label>
                                                <div className="control">
                                                    <input onChange={handleInput} className="input" name="withWhom" type="text" placeholder="Dr. Luis Martínez" required />
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label className="label">¿Cuándo?</label>
                                                <div className="control">
                                                    <input onChange={handleDateInput} className="input" name="date" type="date" required />
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label className="label">¿Dónde?</label>
                                                <div className="control">
                                                    <input onChange={handleInput} className="input" name="place" type="text" placeholder="Clínica Condesa" required />
                                                </div>
                                            </div>
                                            <div className="field is-grouped">
                                                <div className="control">
                                                    <button className="button is-link">Guardar cita</button>
                                                </div>
                                            </div>
                                        </form>
                                    </section>
                                </div>
                            </div>
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
