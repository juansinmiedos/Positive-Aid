import React from 'react'
import {Link} from 'react-router-dom'

export default function ProfileGeneralStatus({user, showLabsForm, labsIsOpen, submitLabsForm, handleNumberInput, handleDateInput, allLabs}) {
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
                <tr key={x.date}>
                    <th>{x.date}</th>
                    <td>{x.cd4}</td>
                    <td>{x.cargaViral}</td>
                    <td>{x.trigliceridos}</td>
                    <td>{x.fnHepatica}</td>
                    <td>{x.fnRenal}</td>
                </tr>
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
                            <div className="columns">
                                <div className="column is-half">
                                    <figure className="image">
                                        <img src="./chart-example.png" alt="chart" />
                                    </figure>
                                </div>
                                <div className="column is-half">
                                    <h1 className="subtitle">Resumen</h1>
                                    <h1 className="title">Tu estado general</h1>
                                    <p>Status actual: <b>{user.status}</b></p>
                                    {statusChecker()}
                                    <p>Fecha de tu último análisis: <b>27/09/2019</b></p>
                                    <p>Fecha de tu próximo análisis: <b>Sin agendar </b><Link to="/">Agendar ahora</Link></p>
                                    <hr />
                                    <p><b>Tabla histórica de resultados</b></p>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th><abbr title="Date">Fecha</abbr></th>
                                                <th><abbr title="CD4">CD4</abbr></th>
                                                <th><abbr title="cargaViral">Carga viral</abbr></th>
                                                <th><abbr title="trigliceridos">Triglicéridos</abbr></th>
                                                <th><abbr title="fnHepatica">Fn. Hepática</abbr></th>
                                                <th><abbr title="fnRenal">Fn. Renal</abbr></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableMaker()}
                                        </tbody>
                                    </table>
                                    <button onClick={() => showLabsForm()} className="button is-danger">Añadir nuevos resultados</button>

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
                                                            <input onChange={handleDateInput} className="input" name="date" type="date" placeholder="LP-1992" required />
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label className="label">Conteo de cd4</label>
                                                        <div className="control">
                                                            <input onChange={handleNumberInput} className="input" name="cd4" type="number" placeholder="LP-1992" required />
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label className="label">Carga viral</label>
                                                        <div className="control">
                                                            <input onChange={handleNumberInput} className="input" name="cargaViral" type="number" placeholder="LP-1992" required />
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label className="label">Triglicéridos</label>
                                                        <div className="control">
                                                            <input onChange={handleNumberInput} className="input" name="trigliceridos" type="number" placeholder="LP-1992" required />
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label className="label">Fn. hepática</label>
                                                        <div className="control">
                                                            <input onChange={handleNumberInput} className="input" name="fnHepatica" type="number" placeholder="LP-1992" required />
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label className="label">Fn. renal</label>
                                                        <div className="control">
                                                            <input onChange={handleNumberInput} className="input" name="fnRenal" type="number" placeholder="LP-1992" required />
                                                        </div>
                                                    </div>
                                                    <div className="field is-grouped">
                                                        <div className="control">
                                                            <button className="button is-link">Guardar resultados</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            

                                            </section>
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
