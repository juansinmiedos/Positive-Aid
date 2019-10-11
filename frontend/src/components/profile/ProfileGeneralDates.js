import React from 'react'
import moment from 'moment'

export default function ProfileGeneralDates({ showAppointmentsForm, appointmentsIsOpen, submitAppointmentsForm, handleInput, handleDateInput, allAppointments, deleteAppointments, showAppointmentsDelete, confirmationAppointmentsDeleteIsOpen, currentAppointmentOfDeletion }) {

    const tileMaker = () => {
        return(allAppointments.map((x) => {
            return(
                <div className="box tilelike" key={x._id}>
                    <p className="title">{x.withWhom}</p>
                    <p>Tipo de cita: <b>{x.typeOfAppointment}</b></p>
                    <p>Dónde: <b>{x.place}</b></p>
                    <p>Cuándo: <b>{moment(x.date).locale('es').format('ll')}</b></p>
                    <button onClick={() => showAppointmentsDelete(x._id)} className="button button-red-paddingless"><i className="fa fa-trash"></i>&nbsp;Borrar</button>

                    {/* <button onClick={() => showAppointmentsDelete(x._id)} className="button button-red-paddingless"><i className="fa fa-trash"></i>&nbsp;Borrar</button> */}
                    {/* <button onClick={() => deleteAppointments(x._id)} className="button button-red-paddingless"><i className="fa fa-edit"></i>&nbsp;Editar</button> */}
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
                                                                <select onChange={handleInput} name="typeOfAppointment" required>
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
                                    <footer className="modal-card-foot"></footer>
                                </div>
                            </div>
                            
                            {/* CONFIRMATION MODAL */}
                            <div className={confirmationAppointmentsDeleteIsOpen ? "modal is-active" : "modal"}>
                                <div className="modal-background"></div>
                                <div className="modal-card">
                                    <header className="modal-card-head">
                                        <p className="modal-card-title"><b>Eliminar cita</b></p>
                                    </header>
                                    <section className="modal-card-body has-text-centered">
                                        <p>¿Estás seguro de que quieres cancelar esta cita?</p>
                                        <button onClick={() => deleteAppointments(currentAppointmentOfDeletion)} className="button button-red"><i className="fa fa-trash"></i>&nbsp;Si, cancelar</button>
                                        <button onClick={() => showAppointmentsDelete()} className="button button-red"><i className="fa fa-undo"></i>&nbsp;No, regresar</button>
                                    </section>
                                    <footer className="modal-card-foot"></footer>
                                </div>
                            </div>

                            {/* NOTIFICACIÓN */}
                            {/* <div className="notification is-danger">
                                <button className="delete"></button>
                                <p className="subtitle">Nueva cita agendada:<br /><b>Análisis</b> con <b>Dr. Diego</b> el <b>14/oct</b> en <b>Hospital de Hierro</b></p>
                            </div>

                            <div className="notification is-danger">
                                <button className="delete"></button>
                                <p className="subtitle">Se ha <u>modificado</u> una cita:<br /><b>Análisis</b> con <b>Dr. Diego</b> el <b>14/oct</b> en <b>Hospital de Hierro</b></p>
                            </div>

                            <div className="notification is-danger">
                                <button className="delete"></button>
                                <p className="subtitle">Se ha <u>eliminado</u> una cita:<br /><b>Análisis</b> con <b>Dr. Diego</b> el <b>14/oct</b> en <b>Hospital de Hierro </b></p>
                            </div> */}

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