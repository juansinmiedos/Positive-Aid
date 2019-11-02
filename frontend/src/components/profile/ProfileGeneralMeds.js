import React, { Component } from 'react'
import { MyContext } from '../../context';

import Swal from 'sweetalert2'

import MEDICATION_SERVICE from '../../services/medication';

export default class ProfileGeneralMeds extends Component  {
    state = {
        meds: {
            med: '',
            frequency: '',
            startHour: '',
            user:this.context.state.user
        },
        medsIsOpen: false,
        confirmationMedsDeleteIsOpen: false,
        currentMedOfDeletion: '',
        medicinesInfo: [
            {name: '',
            commonName: '',
            description: '',
            typeOfMed: '',
            statusOfRec: ''}
        ],
    }

    showMedsForm = () => {
        if(this.state.medsIsOpen === false){
            this.setState({
                medsIsOpen: true
            })
        } else {
            this.setState({
                medsIsOpen: false
            })
        }
    }

    handleInput = (e) => {
        const { meds } = this.state;
        const key = e.target.name;
        meds[key] = e.target.value;
        this.setState({ meds });
        
    };
    
    handleNumberInput = (e) => {
        const { meds } = this.state;
        const key = e.target.name;
        meds[key] = Number(e.target.value);
        this.setState({ meds });
    };

    submitMedsForm = async(e) => {
        try{
            e.preventDefault()
            await MEDICATION_SERVICE.addMedication(this.state.meds)
            this.setState({ meds: this.state.meds })
            this.context.allPromises()

            Swal.fire({
                position: 'top-end',
                title: 'Esquema actualizado',
                showConfirmButton: false,
                timer: 2000
            })

        } catch(error){
            console.log(error)
        }

        if(this.state.medsIsOpen === false){
            this.setState({
                medsIsOpen: true
            })
        } else {
            this.setState({
                medsIsOpen: false
            })
        }
    }

    showMedsDelete = async(id) => {
        if(this.state.confirmationMedsDeleteIsOpen === false){
            await this.setState({
                confirmationMedsDeleteIsOpen: true,
                currentMedOfDeletion: id,
            })
        } else {
            this.setState({
                confirmationMedsDeleteIsOpen: false,
                currentMedOfDeletion: '',
            })
        }
    }

    deleteMeds = async(e) => {
        try{
            await MEDICATION_SERVICE.deleteMedication(e)
            this.context.allPromises()
        } catch(error){
            console.log(error)
        }

        Swal.fire({
            position: 'top-end',
            title: 'Medicamento retirado del esquema',
            showConfirmButton: false,
            timer: 2000
        })

        if(this.state.confirmationMedsDeleteIsOpen === false){
            this.setState({
                confirmationMedsDeleteIsOpen: true
            })
        } else {
            this.setState({
                confirmationMedsDeleteIsOpen: false
            })
        }
    }

    nameMatcher = (name) => {
        for(let i=0; i < this.context.state.medicinesInfo.lenght; i++){
            if (name === this.context.state.medicinesInfo[i].commonName){
                return <p className="subtitle is-size-5">{this.context.state.medicinesInfo[i]}</p>
            }
        }
    }

    boxMaker = () => {
        return(this.context.state.allMeds.map((x) => {
            return(
                <div className="column is-half" key={x._id}>
                    <div className="box">
                        <h1 className="title is-size-5">{x.med}</h1>
                        <p className="subtitle is-size-5">{this.nameMatcher(x.med)}</p>
                        <p className="subtitle is-size-5">Recordatorio: Cada {x.frequency} horas</p>
                        <button onClick={() => this.showMedsDelete(x._id)} className="button button-red-paddingless"><i className="fa fa-trash"></i>&nbsp;Quitar del esquema</button>
                        {/* <button className="button button-red-paddingless"><i className="fa fa-info-circle"></i>&nbsp;Ver detalle</button> */}
                        {/* <button className="button button-red-paddingless"><i className="fa fa-edit"></i>&nbsp;Modificar frecuencia</button> */}
                    </div>
                </div>
            )
        }))
    }

    specificMedicineInfo = () => {
        const aux = this.context.state.medicinesInfo.map((x) => {
            if(this.state.meds.med === x.commonName){
                return  <article className="message is-danger" key={x.name} >
                            <div className="message-header">
                                <p>Conoce tus medicamentos: <b>{x.commonName}</b></p>
                            </div>
                            <div className="message-body">
                                Estas tomando: <b>{x.commonName}</b><br />
                                Nombre de fórmula: <b>{x.name}</b><br />
                                Tipo: <b>{x.typeOfMed}</b><br />
                                Status (según Sec. de Salud): <b>{x.statusOfRec}</b><br />
                                <br />
                                <b>Descripción general</b><br />
                                {x.description}
                            </div>
                        </article>
            }
        })
        return aux
    }

    render(){
        return (
            <>
                <section className="section">
                    <MyContext.Consumer>
                        {(context) => (
                            <div className="is-centered">
                                <div className="columns is-centered">
                                    <div className="column is-three-quarters">
                                        <hr />
                                        <div className="box box-title">
                                            <p className="subtitle">Medicación</p>
                                            <h1 className="title">Tu esquema actual</h1>
                                            {/* <p>Has manejado este esquema desde: <b>25/02/2019</b></p> */}
                                            <button onClick={() => this.showMedsForm()} className="button button-white">Modificar esquema de medicación</button>
                                        </div>
    
                                        <div className={this.state.medsIsOpen ? "modal is-active" : "modal"}>
                                            <div className="modal-background"></div>
                                                <div className="modal-card">
                                                    <header className="modal-card-head">
                                                        <p className="modal-card-title"><b>Agregar medicación al esquema</b></p>
                                                        <button onClick={() => this.showMedsForm()} className="delete" aria-label="close"></button>
                                                    </header>
                                                    <section className="modal-card-body">
                                                        <form onSubmit={this.submitMedsForm}>
                                                            <div className="field is-horizontal">
                                                                <div className="field-body">
                                                                    <div className="field">
                                                                        <label className="label">Medicamento</label>
                                                                        <div className="control">
                                                                            <div className="select">
                                                                                <select onChange={this.handleInput} name="med" >
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
                                                                        <div className="control">
                                                                            <div className="select">
                                                                                <select onChange={this.handleNumberInput} name="frequency">
                                                                                    <option>Selecciona una opción</option>
                                                                                    <option value="8">Cada 8 horas</option>
                                                                                    <option value="12">Cada 12 horas</option>
                                                                                    <option value="24">Cada 24 horas</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <label className="label">Hora de inicio</label>
                                                                <div className="control">
                                                                    <input onChange={this.handleInput} className="input" name="startHour" type="time" required />
                                                                </div>
                                                            </div>
                                                            <div className="field is-grouped">
                                                                <div className="control">
                                                                    <button className="button button-red">Agregar al esquema</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </section>
                                                <footer className="modal-card-foot">
                                                    {this.specificMedicineInfo()}
                                                </footer>
                                            </div>
                                        </div>
    
                                        {/* CONFIRMATION MODAL */}
                                        <div className={this.state.confirmationMedsDeleteIsOpen ? "modal is-active" : "modal"}>
                                            <div className="modal-background"></div>
                                            <div className="modal-card">
                                                <header className="modal-card-head">
                                                    <p className="modal-card-title"><b>Eliminar medicamento</b></p>
                                                </header>
                                                <section className="modal-card-body has-text-centered">
                                                    <p>¿Estás seguro de que quieres quitar este medicamento del esquema?</p>
                                                    <button onClick={() => this.deleteMeds(this.state.currentMedOfDeletion)} className="button button-red"><i className="fa fa-trash"></i>&nbsp;Si, quitar</button>
                                                    <button onClick={() => this.showMedsDelete()} className="button button-red"><i className="fa fa-undo"></i>&nbsp;No, regresar</button>
                                                </section>
                                                <footer className="modal-card-foot"></footer>
                                            </div>
                                        </div>
                                    
                                        {/* NOTIFICACIÓN */}
                                        {/* <div className="notification is-danger">
                                            <button className="delete"></button>
                                            <p className="subtitle">Se ha modificado el esquema.<br /><b>Medicamento</b> se ha agregado, con un recordatorio cada <b>12 horas</b></p>
                                        </div>
    
                                        <div className="notification is-danger">
                                            <button className="delete"></button>
                                            <p className="subtitle">Se ha modificado el esquema.<br /> Frecuencia de <b>Medicamento</b> actualizada, nuevo recordatorio cada <b>12 horas</b></p>
                                        </div>
    
                                        <div className="notification is-danger">
                                            <button className="delete"></button>
                                            <p className="subtitle">Se ha modificado el esquema.<br /><b>Medicamento</b> se ha eliminado.</p>
                                        </div> */}
    
                                    </div>
                                </div>
                                <div className="columns is-centered">
                                    <div className="column is-three-quarters">
                                        <div className="column is-full">
                                            <div className="columns is-multiline">
                                                {this.boxMaker()}
                                            </div>
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

ProfileGeneralMeds.contextType = MyContext;