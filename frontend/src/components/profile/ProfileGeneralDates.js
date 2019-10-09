import React from 'react'

export default function ProfileGeneralDates({ showAppointmentsForm, appointmentsIsOpen, submitAppointmentsForm, handleInput, handleDateInput, allAppointments, deleteAppointments }) {

    const tileMaker = () => {
        return(allAppointments.map((x) => {
            return(
                <div className="box tilelike" key={x._id}>
                    <p className="title">{x.withWhom}</p>
                    <p>Tipo de cita: <b>{x.typeOfAppointment}</b></p>
                    <p>Dónde: <b>{x.place}</b></p>
                    <p>Cuándo: <b>{x.date}</b></p>
                    <button onClick={() => deleteAppointments(x._id)} className="button button-red">Borrar cita</button>
                </div>
            )
        }))
    }

    return (
        <>
            <section className="section">
                <div>
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <hr />
                            <div className="box box-title">
                                <p className="subtitle">Calendario</p>
                                <h1 className="title">Tus citas</h1>
                                <p>Agenda tus citas y revisiones para mantenerte en buen estado.</p>
                                <button onClick={() => showAppointmentsForm()} className="button button-white">Agendar nueva cita</button>
                            </div>
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
                                                    <button className="button button-red">Guardar cita</button>
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
                                {tileMaker()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}