import React from 'react'

export default function ProfileGeneralMeds({showMedsForm, medsIsOpen, submitMedsForm, handleInput, handleNumberInput, allMeds, medicinesInfo, deleteMeds, meds}) {

    //COMO HAGO PARA TRAER LA INFO EN TIEMPO REAL DESDE LA BASE DE DATOS?
    const nameMatcher = (name) => {
        for(let i=0; i < medicinesInfo.lenght; i++){
            if (name === medicinesInfo[i].commonName){
                return <p className="subtitle is-size-5">{medicinesInfo[i]}</p>
            }
        }
    }

    const boxMaker = () => {
        return(allMeds.map((x) => {
            return(
                <div className="column is-half" key={x._id}>
                    <div className="box">
                        <h1 className="title is-size-5">{x.med}</h1>
                        <p className="subtitle is-size-5">{nameMatcher(x.med)}</p>
                        <p className="subtitle is-size-5">Recordatorio: Cada {x.frequency} horas</p>
                        <button onClick={() => deleteMeds(x._id)} className="button button-red-paddingless"><i className="fa fa-trash"></i>&nbsp;Quitar del esquema</button>
                        <button className="button button-red-paddingless"><i className="fa fa-info-circle"></i>&nbsp;Ver detalle</button>
                        <button className="button button-red-paddingless"><i className="fa fa-edit"></i>&nbsp;Modificar frecuencia</button>
                    </div>
                </div>
            )
        }))
    }

    const specificMedicineInfo = () => {
            const aux = medicinesInfo.map((x) => {
                if(meds.med === x.commonName)
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
                    return console.log('')
            })
            return aux
    }

    return (
        <>
            <section className="section">
                <div className="is-centered">
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <hr />
                            <div className="box box-title">
                                <p className="subtitle">Medicación</p>
                                <h1 className="title">Tu esquema actual</h1>
                                {/* <p>Has manejado este esquema desde: <b>25/02/2019</b></p> */}
                                <button onClick={() => showMedsForm()} className="button button-white">Modificar esquema de medicación</button>
                            </div>

                            <div className={medsIsOpen ? "modal is-active" : "modal"}>
                                <div className="modal-background"></div>
                                    <div className="modal-card">
                                        <header className="modal-card-head">
                                            <p className="modal-card-title"><b>Agregar medicación al esquema</b></p>
                                            <button onClick={() => showMedsForm()} className="delete" aria-label="close"></button>
                                        </header>
                                        <section className="modal-card-body">
                                            <form onSubmit={submitMedsForm}>
                                                <div className="field is-horizontal">
                                                    <div className="field-body">
                                                        <div className="field">
                                                            <label className="label">Medicamento</label>
                                                            <div className="control">
                                                                <div className="select">
                                                                    <select onChange={handleInput} name="med" >
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
                                                                    <select onChange={handleNumberInput} name="frequency">
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
                                                        <input onChange={handleInput} className="input" name="startHour" type="time" required />
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
                                        {specificMedicineInfo()}
                                    </footer>
                                </div>
                            </div>
                        
                            {/* NOTIFICACIÓN */}
                            <div class="notification is-danger">
                                <button class="delete"></button>
                                <p className="subtitle">Se ha modificado el esquema.<br /><b>Medicamento</b> se ha agregado, con un recordatorio cada <b>12 horas</b></p>
                            </div>

                            <div class="notification is-danger">
                                <button class="delete"></button>
                                <p className="subtitle">Se ha modificado el esquema.<br /> Frecuencia de <b>Medicamento</b> actualizada, nuevo recordatorio cada <b>12 horas</b></p>
                            </div>

                            <div class="notification is-danger">
                                <button class="delete"></button>
                                <p className="subtitle">Se ha modificado el esquema.<br /><b>Medicamento</b> se ha eliminado.</p>
                            </div>

                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <div className="column is-full">
                                <div className="columns is-multiline">
                                    {boxMaker()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
