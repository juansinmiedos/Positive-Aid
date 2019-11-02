import React, { Component } from 'react'
import { MyContext } from '../../context';

import Swal from 'sweetalert2'
import moment from 'moment'

import APPOINTMENT_SERVICE from '../../services/appointment';

export default class ProfileGeneralDates extends Component {
    state = {
        appointments: {
            place: '',
            typeOfAppointment: '',
            withWhom: '',
            date: '',
            user: this.context.state.user
        },
        appointmentsIsOpen: false,
        confirmationAppointmentsDeleteIsOpen: false,
        currentAppointmentOfDeletion: '',
    }

    showAppointmentsForm = () => {
        if(this.state.appointmentsIsOpen === false){
            this.setState({
                appointmentsIsOpen: true
            })
        } else {
            this.setState({
                appointmentsIsOpen: false
            })
        }
    }

    handleInput = (e) => {
        const { appointments } = this.state;
        const key = e.target.name;
        appointments[key] = e.target.value;
        this.setState({ appointments });
        
    };
    
    handleDateInput = (e) => {
        const { appointments } = this.state;
        const key = e.target.name;
        appointments[key] = new Date(e.target.value);
        this.setState({ appointments });
    };

    submitAppointmentsForm = async(e) => {
        try{
            e.preventDefault()
            await APPOINTMENT_SERVICE.addAppointment(this.state.appointments)
            this.setState({ appointments: this.state.appointments })
            this.context.allPromises()

            Swal.fire({
                position: 'top-end',
                title: 'Nueva cita creada.',
                showConfirmButton: false,
                timer: 2000
            })

        } catch(error){
            console.log(error)
        }

        if(this.state.appointmentsIsOpen === false){
            this.setState({
                appointmentsIsOpen: true
            })
        } else {
            this.setState({
                appointmentsIsOpen: false
            })
        }
    }

    showAppointmentsDelete = async(id) => {
        if(this.state.confirmationAppointmentsDeleteIsOpen === false){
            await this.setState({
                confirmationAppointmentsDeleteIsOpen: true,
                currentAppointmentOfDeletion: id,
            })
        } else {
            this.setState({
                confirmationAppointmentsDeleteIsOpen: false,
                currentAppointmentOfDeletion: '',
            })
        }
    }

    deleteAppointments = async(e) => {
        try{
            await APPOINTMENT_SERVICE.deleteAppointment(e)
            this.context.allPromises()
        } catch(error){
            console.log(error)
        }

        Swal.fire({
            position: 'top-end',
            title: 'Cita cancelada',
            showConfirmButton: false,
            timer: 2000
        })

        if(this.state.confirmationAppointmentsDeleteIsOpen === false){
            this.setState({
                confirmationAppointmentsDeleteIsOpen: true
            })
        } else {
            this.setState({
                confirmationAppointmentsDeleteIsOpen: false
            })
        }
    }

    tileMaker = () => {
        return(this.context.state.allAppointments.map((x) => {
            return(
                <div className="box tilelike" key={x._id}>
                    <p className="title">{x.withWhom}</p>
                    <p>Tipo de cita: <b>{x.typeOfAppointment}</b></p>
                    <p>Dónde: <b>{x.place}</b></p>
                    <p>Cuándo: <b>{moment(x.date).locale('es').format('ll')}</b></p>
                    <button onClick={() => this.showAppointmentsDelete(x._id)} className="button button-red-paddingless"><i className="fa fa-trash"></i>&nbsp;Borrar</button>

                    {/* <button onClick={() => showAppointmentsDelete(x._id)} className="button button-red-paddingless"><i className="fa fa-trash"></i>&nbsp;Borrar</button> */}
                    {/* <button onClick={() => deleteAppointments(x._id)} className="button button-red-paddingless"><i className="fa fa-edit"></i>&nbsp;Editar</button> */}
                </div>
            )
        }))
    }

    render() {
        return (
            <>
                <section className="section">
                    <MyContext.Consumer>
                        {(context) => (
                            <div>
                                <div className="columns is-centered">
                                    <div className="column is-three-quarters">
                                        <hr />
                                        <div className="box box-title">
                                            <p className="subtitle">Calendario</p>
                                            <h1 className="title">Tus citas</h1>
                                            <p>Agenda tus citas y revisiones para mantenerte en buen estado.</p>
                                            <button onClick={() => this.showAppointmentsForm()} className="button button-white">Agendar nueva cita</button>
                                        </div>
                                        <div className={this.state.appointmentsIsOpen ? "modal is-active" : "modal"}>
                                            <div className="modal-background"></div>
                                            <div className="modal-card">
                                                <header className="modal-card-head">
                                                    <p className="modal-card-title"><b>Nueva cita</b></p>
                                                    <button onClick={() => this.showAppointmentsForm()} className="delete" aria-label="close"></button>
                                                </header>
                                                <section className="modal-card-body">
    
                                                    <form onSubmit={this.submitAppointmentsForm} >
                                                        <div className="field">
                                                            <label className="label">Tipo de cita</label>
                                                        </div>
                                                        <div className="field is-horizontal">
                                                            <div className="field-body">
                                                                <div className="field">
                                                                    <div className="control">
                                                                        <div className="select">
                                                                            <select onChange={this.handleInput} name="typeOfAppointment" required>
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
                                                                <input onChange={this.handleInput} className="input" name="withWhom" type="text" placeholder="Dr. Luis Martínez" required />
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label">¿Cuándo?</label>
                                                            <div className="control">
                                                                <input onChange={this.handleDateInput} className="input" name="date" type="date" required />
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label">¿Dónde?</label>
                                                            <div className="control">
                                                                <input onChange={this.handleInput} className="input" name="place" type="text" placeholder="Clínica Condesa" required />
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
                                        <div className={this.state.confirmationAppointmentsDeleteIsOpen ? "modal is-active" : "modal"}>
                                            <div className="modal-background"></div>
                                            <div className="modal-card">
                                                <header className="modal-card-head">
                                                    <p className="modal-card-title"><b>Eliminar cita</b></p>
                                                </header>
                                                <section className="modal-card-body has-text-centered">
                                                    <p>¿Estás seguro de que quieres cancelar esta cita?</p>
                                                    <button onClick={() => this.deleteAppointments(this.state.currentAppointmentOfDeletion)} className="button button-red"><i className="fa fa-trash"></i>&nbsp;Si, cancelar</button>
                                                    <button onClick={() => this.showAppointmentsDelete()} className="button button-red"><i className="fa fa-undo"></i>&nbsp;No, regresar</button>
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
                                            {this.tileMaker()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </MyContext.Consumer>
                </section>
            </>
        )
    }
}

ProfileGeneralDates.contextType = MyContext;