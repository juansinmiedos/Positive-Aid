import React from 'react'
import {Link} from 'react-router-dom'
import {VictoryChart, VictoryGroup, VictoryLine, VictoryTooltip, VictoryVoronoiContainer, VictoryScatter, VictoryTheme} from 'victory'

export default function ProfileGeneralStatus({user, showLabsForm, labsIsOpen, submitLabsForm, handleNumberInput, handleDateInput, allLabs, deleteLabs}) {
    const statusChecker = () => {
        if(user.status === 'SIDA'){
            return(
                <span className="tag is-medium is-warning">Tu status es riesgoso, por favor agenda una cita con tu médico ahora.</span>
            )
        } else if(user.status === 'Indetectable'){
            return(
                <span className="tag is-medium is-success"><b>¡Felicidades! Corrobora esta información con tu médico de cabecera.</b></span>
            )
        }
    }

    const tableMaker = () => {
        return (allLabs.map((x) => {
            return(
                <tr key={x._id}>
                    <th>{x.date}</th>
                    <td>{x.cd4}</td>
                    <td>{x.cargaViral}</td>
                    <td>{x.trigliceridos}</td>
                    <td>{x.fnHepatica}</td>
                    <td>{x.fnRenal}</td>
                    <td>
                        <button onClick={() => deleteLabs(x._id)} className="button button-red-paddingless"><i className="fa fa-trash"></i></button>
                        <button className="button button-red-paddingless"><i className="fa fa-edit"></i></button>
                    </td>
                </tr>
            )
        }))
    }

    const cd4DataOrganizer = () => {
        const arrayaux = []
        allLabs.forEach((x) => {
            arrayaux.push({x: new Date (x.date), y: x.cd4})
        })
        return arrayaux
    }

    const cargaViralDataOrganizer = () => {
        const arrayaux = []
        allLabs.forEach((x) => {
            arrayaux.push({x: new Date (x.date), y: x.cargaViral})
        })
        return arrayaux
    }

    const trigliceridosDataOrganizer = () => {
        const arrayaux = []
        allLabs.forEach((x) => {
            arrayaux.push({x: new Date (x.date), y: x.trigliceridos})
        })
        return arrayaux
    }

    const fnHepaticaDataOrganizer = () => {
        const arrayaux = []
        allLabs.forEach((x) => {
            arrayaux.push({x: new Date (x.date), y: x.fnHepatica})
        })
        return arrayaux
    }

    const fnRenalDataOrganizer = () => {
        const arrayaux = []
        allLabs.forEach((x) => {
            arrayaux.push({x: new Date (x.date), y: x.fnRenal})
        })
        return arrayaux
    }

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
                                        <p>Status actual: <b>{user.status}</b></p>
                                        {statusChecker()}
                                        <p>Fecha de tu último análisis: <b>27/09/2019</b></p>
                                        <p>Fecha de tu próximo análisis: <b>Sin agendar </b><Link to="/">Agendar ahora</Link></p>
                                    </div>
                                </div>
                                {allLabs[0].cd4 && <div className="column is-full">
                                    <VictoryChart theme={VictoryTheme.material} style={{ fontSize: 4 }} width={400} height={180} containerComponent={<VictoryVoronoiContainer/>}>
                                        <VictoryGroup style={{data:{ strokeWidth: 1, fillOpacity: 1}}}>
                                            <VictoryLine interpolation={"linear"} labels={({ datum }) => `CD4: ${datum.y}`} labelComponent={<VictoryTooltip style={{ fontSize: 4 }} />} style={{ data: { stroke: "#c43a31"} }} data={cd4DataOrganizer()} />
                                            <VictoryScatter data={cd4DataOrganizer()} size={2} style={{ data: { fill: "#c43a31" } }} />

                                            <VictoryLine interpolation={"linear"} labels={({ datum }) => `Carga viral: ${datum.y}`} labelComponent={<VictoryTooltip style={{ fontSize: 4 }} />} style={{ data: { stroke: "#c43a31"} }} data={cargaViralDataOrganizer()} />
                                            <VictoryScatter data={cargaViralDataOrganizer()} size={2} style={{ data: { fill: "#c43a31" } }} />

                                            <VictoryLine interpolation={"linear"} labels={({ datum }) => `Triglicéridos: ${datum.y}`} labelComponent={<VictoryTooltip style={{ fontSize: 4 }} />} style={{ data: { stroke: "#c43a31"} }} data={trigliceridosDataOrganizer()} />
                                            <VictoryScatter data={trigliceridosDataOrganizer()} size={2} style={{ data: { fill: "#c43a31" } }} />

                                            <VictoryLine interpolation={"linear"} labels={({ datum }) => `Fn. Hepática: ${datum.y}`} labelComponent={<VictoryTooltip style={{ fontSize: 4 }} />} style={{ data: { stroke: "#c43a31"} }} data={fnHepaticaDataOrganizer()} />
                                            <VictoryScatter data={fnHepaticaDataOrganizer()} size={2} style={{ data: { fill: "#c43a31" } }} />

                                            <VictoryLine interpolation={"linear"} labels={({ datum }) => `Fn. Renal: ${datum.y}`} labelComponent={<VictoryTooltip style={{ fontSize: 4 }} />} style={{ data: { stroke: "#c43a31"} }} data={fnRenalDataOrganizer()} />
                                            <VictoryScatter data={fnRenalDataOrganizer()} size={2} style={{ data: { fill: "#c43a31" } }} />
                                            
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
                                            {tableMaker()}
                                        </tbody>
                                    </table>
                                    <button onClick={() => showLabsForm()} className="button button-red-paddingless">+ Añadir nuevos resultados</button>
                                </div>

                                    <div className={labsIsOpen ? "modal is-active" : "modal"}>
                                        <div className="modal-background"></div>
                                        <div className="modal-card">
                                            <header className="modal-card-head">
                                                <p className="modal-card-title"><b>Agregar resultados de análisis</b></p>
                                                <button onClick={() => showLabsForm()} className="delete" aria-label="close"></button>
                                            </header>
                                            <section className="modal-card-body">

                                                <form onSubmit={submitLabsForm}>
                                                    <div className="field">
                                                        <label className="label">Fecha de la muestra</label>
                                                        <div className="control">
                                                            <input onChange={handleDateInput} className="input" name="date" type="date" placeholder="100" required />
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label className="label">Conteo de cd4</label>
                                                        <div className="control">
                                                            <input onChange={handleNumberInput} className="input" name="cd4" type="number" placeholder="100" required />
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label className="label">Carga viral</label>
                                                        <div className="control">
                                                            <input onChange={handleNumberInput} className="input" name="cargaViral" type="number" placeholder="100" required />
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label className="label">Triglicéridos</label>
                                                        <div className="control">
                                                            <input onChange={handleNumberInput} className="input" name="trigliceridos" type="number" placeholder="100" required />
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label className="label">Fn. hepática</label>
                                                        <div className="control">
                                                            <input onChange={handleNumberInput} className="input" name="fnHepatica" type="number" placeholder="100" required />
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label className="label">Fn. renal</label>
                                                        <div className="control">
                                                            <input onChange={handleNumberInput} className="input" name="fnRenal" type="number" placeholder="100" required />
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

                                    {/* NOTIFICACIÓN */}
                                    <div class="notification is-danger">
                                        <button class="delete"></button>
                                        <p className="subtitle">Nuevos resultados de laboratorio agregados.<br />Fecha de análisis: <b>14/oct</b></p>
                                    </div>

                                    <div class="notification is-danger">
                                        <button class="delete"></button>
                                        <p className="subtitle">Se han editado los resultados del <b>14/oct</b></p>
                                    </div>

                                    <div class="notification is-danger">
                                        <button class="delete"></button>
                                        <p className="subtitle">Se han eliminado los resultados del <b>14/oct</b></p>
                                    </div>

                                    <div class="notification is-success">
                                        <button class="delete"></button>
                                        <p className="subtitle"><b>¡Felicidades!</b><br />De acuerdo a tus resultados del <b>14/oct</b> tu status es ahora <b>Indetecable</b>.<br/ >Corrobora esta información con tu médico de cabecera.</p>
                                    </div>

                                    <div class="notification is-warning">
                                        <button class="delete"></button>
                                        <p className="subtitle"><b>Atención</b><br />De acuerdo a tus resultados del <b>14/oct</b> has entrado en fase de <b>SIDA</b><br /><b>Agenda una cita inmediatamente con tu médico de cabecera.</b></p>
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