import React from 'react'

export default function ProfileGeneralMeds({showMedsForm, medsIsOpen}) {
    return (
        <>
            <section className="section">
                <div className="is-centered">
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <hr />
                            <p className="subtitle">Medicación</p>
                            <h1 className="title">Tu esquema actual</h1>
                            <p>Has manejado este esquema desde: <b>25/02/2019</b></p>
                            <button onClick={() => showMedsForm()} className="button is-danger">Modificar esquema de medicación</button>

                            <div className={medsIsOpen ? "modal is-active" : "modal"}>
                                <div className="modal-background"></div>
                                    <div className="modal-card">
                                        <header className="modal-card-head">
                                            <p className="modal-card-title"><b>Agregar medicación al esquema</b></p>
                                            <button onClick={() => showMedsForm()} className="delete" aria-label="close"></button>
                                        </header>
                                        <section className="modal-card-body">
                                            <form onSubmit="">
                                                <div className="field is-horizontal">
                                                    <div className="field-body">
                                                        <div className="field">
                                                            <label className="label">Medicamento</label>
                                                            <div class="control">
                                                                <div class="select">
                                                                    <select>
                                                                        <option>Selecciona una opción</option>
                                                                        <option value="Biktarvy">Biktarvy</option>
                                                                        <option value="Triumeq">Triumeq</option>
                                                                        <option value="Tivicay">Tivicay</option>
                                                                        <option value="Lamivudina/Tenofovir, Mivutin">Lamivudina/Tenofovir o Mivutin</option>
                                                                        <option value="Cimduo">Cimduo</option>
                                                                        <option value="Descovy">Descovy</option>
                                                                        <option value="Delstrigo">Delstrigo</option>
                                                                        <option value="Symfi, Symfi Lo">Symfi, Symfi Lo</option>
                                                                        <option value="Genvoya">Genvoya</option>
                                                                        <option value="Atripla">Atripla</option>
                                                                        <option value="Pifeltro">Pifeltro</option>
                                                                        <option value="Stribild">Stribild</option>
                                                                        <option value="Prezcobix">Prezcobix</option>
                                                                        <option value="Isentress, Isentress HD">Isentress, Isentress HD</option>
                                                                        <option value="Sustiva">Sustiva</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="field is-horizontal">
                                                    <div className="field-body">
                                                        <div className="field">
                                                            <label className="label">Frecuencia</label>
                                                            <div class="control">
                                                                <div class="select">
                                                                    <select>
                                                                        <option>Selecciona una opción</option>
                                                                        <option>Cada 8 horas</option>
                                                                        <option>Cada 12 horas</option>
                                                                        <option>Cada 24 horas</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <label className="label">Hora de inicio</label>
                                                    <div className="control">
                                                        <input onChange="" className="input" name="username" type="time" placeholder="LP-1992" required />
                                                    </div>
                                                </div>
                                                <div className="field is-grouped">
                                                    <div className="control">
                                                        <button className="button is-link">Agregar al esquema</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </section>
                                    <footer class="modal-card-foot">
                                        <article className="message is-warning">
                                            <div class="message-header">
                                                <p>Conoce tus medicamentos</p>
                                            </div>
                                            <div className="message-body">
                                                Estas tomando: <b>Nombre común</b><br />
                                                Nombre de fórmula: <b>Nombre de fórmula</b><br />
                                                Tipo: <b>Coformulado o no coformulado</b><br />
                                                Status (según Sec. de Salud): <b>Preferente</b><br />
                                                <br />
                                                <b>Descripción general</b><br />
                                                BIC es un inhibidor de integrasa de segunda generación, con mayor barrera genética a la resistencia; mostró ser, como tercer componente, no inferior al DTG. No recomendado en personas que usen rifampicina o rifabutina ni en embarazadas. <br /><br />Consulte aquí la última versión de la "Guía de Manejo Antirretroviral" para mayor información.
                                            </div>
                                        </article>
                                    </footer>
                                </div>
                            </div>
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
                                            <h1 className="title is-size-5">Nombre comercial</h1>
                                            <p className="subtitle is-size-5">Nombre de fórmula</p>
                                            <p className="subtitle is-size-5">Tomar cada 8 horas</p>
                                            <button className="button is-danger">Quitar del esquema</button>
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
                                            <h1 className="title is-size-5">Nombre comercial</h1>
                                            <p className="is-size-5">Nombre de fórmula<br /><b>Tomar cada 8 horas</b></p>
                                            <button className="button is-danger">Quitar del esquema</button>
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