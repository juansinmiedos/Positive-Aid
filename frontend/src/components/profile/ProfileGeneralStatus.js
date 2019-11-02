import React, { Component } from 'react'
import { MyContext } from '../../context';
import {VictoryChart, VictoryGroup, VictoryLine, VictoryTooltip, VictoryVoronoiContainer, VictoryScatter, VictoryTheme} from 'victory'

import Swal from 'sweetalert2'
import moment from 'moment'

import LABS_SERVICE from '../../services/labs';

export default class ProfileGeneralStatus extends Component {
    state = {
        labs: {
            date: '',
            cd4: '',
            cargaViral: '',
            trigliceridos: '',
            fnHepatica: '',
            fnRenal: '',
            user: this.context.state.user
        },
        labsIsOpen: false,
        confirmationLabsDeleteIsOpen: false,
        currentLabOfDeletion: '',
    }

    showLabsForm = () => {
        if(this.state.labsIsOpen === false){
            this.setState({
                labsIsOpen: true
            })
        } else {
            this.setState({
                labsIsOpen: false
            })
        }
    }

    handleInput = (e) => {
        const { labs } = this.state;
        const key = e.target.name;
        labs[key] = e.target.value;
        this.setState({ labs });
        
    };
    
    handleNumberInput = (e) => {
        const { labs } = this.state;
        const key = e.target.name;
        labs[key] = Number(e.target.value);
        this.setState({ labs });
    };
    
    handleDateInput = (e) => {
        const { labs } = this.state;
        const key = e.target.name;
        labs[key] = new Date(e.target.value);
        this.setState({ labs });
    };

    submitLabsForm = async(e) => {
        try{
            e.preventDefault()
            await LABS_SERVICE.addLabs(this.state.labs)
            this.context.allPromises()

            Swal.fire({
                position: 'top-end',
                title: 'Nuevos resultados de laboratorio agregados.',
                showConfirmButton: false,
                timer: 2000
            })

            // if(this.state.allLabs[this.state.allLabs.length - 1].cargaViral >= 10){
            //     console.log(this.state.allLabs)
            //     this.user.status.setState(prevState => {
            //         return {
            //             ...prevState,
            //             status: 'SIDA'
            //         }
            //     })
                
            //     this.componentDidMount()
            //     this.props.history.push('/perfil')
            // }

            
        } catch(error){
            console.log(error);
        }

        this.showLabsForm()
    }

    showLabsDelete = async(id) => {
        if(this.state.confirmationLabsDeleteIsOpen === false){
            await this.setState({
                confirmationLabsDeleteIsOpen: true,
                currentLabOfDeletion: id,
            })
        } else {
            this.setState({
                confirmationLabsDeleteIsOpen: false,
                currentLabOfDeletion: '',
            })
        }
    }

    deleteLabs = async(e) => {
        try{
            await LABS_SERVICE.deleteLabs(e)
            this.context.allPromises()
        } catch(error){
            console.log(error)
        }

        Swal.fire({
            position: 'top-end',
            title: 'Resultados de laboratorio eliminados',
            showConfirmButton: false,
            timer: 2000
        })

        if(this.state.confirmationLabsDeleteIsOpen === false){
            this.setState({
                confirmationLabsDeleteIsOpen: true
            })
        } else {
            this.setState({
                confirmationLabsDeleteIsOpen: false
            })
        }
    }

    //STATUS UPDATER
    // updateHealthStatus = async() => {
    //     if(this.context.state.allLabs[this.state.allLabs.length - 1].cargaViral >= 10){

    //         const newStatus = (() => this.state.user.status = 'SIDA')

    //         await AUTH_SERVICE.update(this.state.user)
    //         this.setState(prevState => {
    //             return {
    //                 ...prevState,
    //                 status: newStatus
    //             }
    //         })
    //     } 
    // }

    statusChecker = () => {
        if(this.context.state.user.status === 'SIDA'){
            return(
                <span className="tag is-medium is-warning">Tu status es riesgoso, por favor agenda una cita con tu médico ahora.</span>
            )
        } else if(this.context.state.user.status === 'Indetectable'){
            return(
                <span className="tag is-medium is-success"><b>¡Felicidades! Corrobora esta información con tu médico de cabecera.</b></span>
            )
        }
    }

    tableMaker = () => {
        return (this.context.state.allLabs.map((x) => {
            return(
                <tr key={x._id}>
                    <th>{moment(x.date).format('ll')}</th>
                    <td>{x.cd4}</td>
                    <td>{x.cargaViral}</td>
                    <td>{x.trigliceridos}</td>
                    <td>{x.fnHepatica}</td>
                    <td>{x.fnRenal}</td>
                    <td>
                        <button onClick={() => this.showLabsDelete(x._id)} className="button button-red-paddingless"><i className="fa fa-trash"></i></button>
                        {/* <button className="button button-red-paddingless"><i className="fa fa-edit"></i></button> */}
                    </td>
                </tr>
            )
        }))
    }

    cd4DataOrganizer = () => {
        const arrayaux = []
        this.context.state.allLabs.forEach((x) => {
            arrayaux.push({x: new Date (x.date), y: x.cd4})
        })
        return arrayaux
    }

    cargaViralDataOrganizer = () => {
        const arrayaux = []
        this.context.state.allLabs.forEach((x) => {
            arrayaux.push({x: new Date (x.date), y: x.cargaViral})
        })
        return arrayaux
    }

    trigliceridosDataOrganizer = () => {
        const arrayaux = []
        this.context.state.allLabs.forEach((x) => {
            arrayaux.push({x: new Date (x.date), y: x.trigliceridos})
        })
        return arrayaux
    }

    fnHepaticaDataOrganizer = () => {
        const arrayaux = []
        this.context.state.allLabs.forEach((x) => {
            arrayaux.push({x: new Date (x.date), y: x.fnHepatica})
        })
        return arrayaux
    }

    fnRenalDataOrganizer = () => {
        const arrayaux = []
        this.context.state.allLabs.forEach((x) => {
            arrayaux.push({x: new Date (x.date), y: x.fnRenal})
        })
        return arrayaux
    }

    render(){
        return (
            <>
                <section className="section">
                    <div>
                        <div className="columns is-centered">
                            <div className="column is-three-quarters">
                            <hr />
                                <div className="columns is-multiline">
                                    <div className="column is-full">
                                        <div className="box box-title">
                                            <h1 className="subtitle">Resumen</h1>
                                            <h1 className="title">Tu estado general</h1>
                                            <p>Status actual: <b>{this.context.state.user.status}</b></p>
                                            {this.statusChecker()}
                                            {/* <p>Fecha de tu último análisis: <b>27/09/2019</b></p>
                                            <p>Fecha de tu próximo análisis: <b>Sin agendar </b><Link to="/">Agendar ahora</Link></p> */}
                                        </div>
                                    </div>
                                    {this.context.state.allLabs[0].cd4 && <div className="column is-full">
                                        <VictoryChart theme={VictoryTheme.material} style={{ fontSize: 4 }} width={400} height={180} containerComponent={<VictoryVoronoiContainer/>}>
                                            <VictoryGroup style={{data:{ strokeWidth: 1, fillOpacity: 1}}}>
                                                <VictoryLine interpolation={"linear"} labels={({ datum }) => `CD4: ${datum.y}`} labelComponent={<VictoryTooltip style={{ fontSize: 4 }} />} style={{ data: { stroke: "#c43a31"} }} data={this.cd4DataOrganizer()} />
                                                <VictoryScatter data={this.cd4DataOrganizer()} size={2} style={{ data: { fill: "#c43a31" } }} />

                                                <VictoryLine interpolation={"linear"} labels={({ datum }) => `Carga viral: ${datum.y}`} labelComponent={<VictoryTooltip style={{ fontSize: 4 }} />} style={{ data: { stroke: "#c43a31"} }} data={this.cargaViralDataOrganizer()} />
                                                <VictoryScatter data={this.cargaViralDataOrganizer()} size={2} style={{ data: { fill: "#c43a31" } }} />

                                                <VictoryLine interpolation={"linear"} labels={({ datum }) => `Triglicéridos: ${datum.y}`} labelComponent={<VictoryTooltip style={{ fontSize: 4 }} />} style={{ data: { stroke: "#c43a31"} }} data={this.trigliceridosDataOrganizer()} />
                                                <VictoryScatter data={this.trigliceridosDataOrganizer()} size={2} style={{ data: { fill: "#c43a31" } }} />

                                                <VictoryLine interpolation={"linear"} labels={({ datum }) => `Fn. Hepática: ${datum.y}`} labelComponent={<VictoryTooltip style={{ fontSize: 4 }} />} style={{ data: { stroke: "#c43a31"} }} data={this.fnHepaticaDataOrganizer()} />
                                                <VictoryScatter data={this.fnHepaticaDataOrganizer()} size={2} style={{ data: { fill: "#c43a31" } }} />

                                                <VictoryLine interpolation={"linear"} labels={({ datum }) => `Fn. Renal: ${datum.y}`} labelComponent={<VictoryTooltip style={{ fontSize: 4 }} />} style={{ data: { stroke: "#c43a31"} }} data={this.fnRenalDataOrganizer()} />
                                                <VictoryScatter data={this.fnRenalDataOrganizer()} size={2} style={{ data: { fill: "#c43a31" } }} />
                                                
                                            </VictoryGroup>
                                        </VictoryChart>
                                    </div>}
                                    <div className="column is-full">
                                    <div className="box">
                                        <h1 className="title"><b>Tabla histórica de resultados</b></h1>
                                        <table className="table is-fullwidth">
                                            <thead>
                                                <tr>
                                                    <th><abbr title="Date">Fecha</abbr></th>
                                                    <th><abbr title="CD4">CD4</abbr></th>
                                                    <th><abbr title="cargaViral">Carga viral</abbr></th>
                                                    <th><abbr title="trigliceridos">Triglicéridos</abbr></th>
                                                    <th><abbr title="fnHepatica">Fn. Hepática</abbr></th>
                                                    <th><abbr title="fnRenal">Fn. Renal</abbr></th>
                                                    <th><abbr>&nbsp;</abbr></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.tableMaker()}
                                            </tbody>
                                        </table>
                                        <button onClick={() => this.showLabsForm()} className="button button-red-paddingless">+ Añadir nuevos resultados</button>
                                    </div>

                                        <div className={this.state.labsIsOpen ? "modal is-active" : "modal"}>
                                            <div className="modal-background"></div>
                                            <div className="modal-card">
                                                <header className="modal-card-head">
                                                    <p className="modal-card-title"><b>Agregar resultados de análisis</b></p>
                                                    <button onClick={() => this.showLabsForm()} className="delete" aria-label="close"></button>
                                                </header>
                                                <section className="modal-card-body">

                                                    <form onSubmit={this.submitLabsForm}>
                                                        <div className="field">
                                                            <label className="label">Fecha de la muestra</label>
                                                            <div className="control">
                                                                <input onChange={this.handleDateInput} className="input" name="date" type="date" placeholder="100" required />
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label">Conteo de cd4</label>
                                                            <div className="control">
                                                                <input onChange={this.handleNumberInput} className="input" name="cd4" type="number" placeholder="100" required />
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label">Carga viral</label>
                                                            <div className="control">
                                                                <input onChange={this.handleNumberInput} className="input" name="cargaViral" type="number" placeholder="100" required />
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label">Triglicéridos</label>
                                                            <div className="control">
                                                                <input onChange={this.handleNumberInput} className="input" name="trigliceridos" type="number" placeholder="100" required />
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label">Fn. hepática</label>
                                                            <div className="control">
                                                                <input onChange={this.handleNumberInput} className="input" name="fnHepatica" type="number" placeholder="100" required />
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label">Fn. renal</label>
                                                            <div className="control">
                                                                <input onChange={this.handleNumberInput} className="input" name="fnRenal" type="number" placeholder="100" required />
                                                            </div>
                                                        </div>
                                                        <div className="field is-grouped">
                                                            <div className="control">
                                                                <button className="button button-red">Guardar resultados</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </section>
                                                <footer className="modal-card-foot"></footer>
                                            </div>
                                        </div>

                                        {/* CONFIRMATION MODAL */}
                                        <div className={this.state.confirmationLabsDeleteIsOpen ? "modal is-active" : "modal"}>
                                            <div className="modal-background"></div>
                                            <div className="modal-card">
                                                <header className="modal-card-head">
                                                    <p className="modal-card-title"><b>Eliminar resultados</b></p>
                                                </header>
                                                <section className="modal-card-body has-text-centered">
                                                    <p>¿Estás seguro de que quieres eliminar estos resultados?</p>
                                                    <button onClick={() => this.deleteLabs(this.state.currentLabOfDeletion)} className="button button-red"><i className="fa fa-trash"></i>&nbsp;Si, eliminar</button>
                                                    <button onClick={() => this.showLabsDelete()} className="button button-red"><i className="fa fa-undo"></i>&nbsp;No, regresar</button>
                                                </section>
                                                <footer className="modal-card-foot"></footer>
                                            </div>
                                        </div>

                                        {/* NOTIFICACIÓN */}
                                        {/* <div className="notification is-danger">
                                            <button className="delete"></button>
                                            <p className="subtitle">Nuevos resultados de laboratorio agregados.<br />Fecha de análisis: <b>14/oct</b></p>
                                        </div>

                                        <div className="notification is-danger">
                                            <button className="delete"></button>
                                            <p className="subtitle">Se han editado los resultados del <b>14/oct</b></p>
                                        </div>

                                        <div className="notification is-danger">
                                            <button className="delete"></button>
                                            <p className="subtitle">Se han eliminado los resultados del <b>14/oct</b></p>
                                        </div>

                                        <div className="notification is-success">
                                            <button className="delete"></button>
                                            <p className="subtitle"><b>¡Felicidades!</b><br />De acuerdo a tus resultados del <b>14/oct</b> tu status es ahora <b>Indetecable</b>.<br />Corrobora esta información con tu médico de cabecera.</p>
                                        </div>

                                        <div className="notification is-warning">
                                            <button className="delete"></button>
                                            <p className="subtitle"><b>Atención</b><br />De acuerdo a tus resultados del <b>14/oct</b> has entrado en fase de <b>SIDA</b><br /><b>Agenda una cita inmediatamente con tu médico de cabecera.</b></p>
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

ProfileGeneralStatus.contextType = MyContext;