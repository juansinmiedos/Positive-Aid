import React from 'react'

export default function ProfileHeader({user, showEditForm, isOpen, submitEditForm, handleInput} ) {
    return (
        <>
            <section className="section box-title profile-header">
                <div>
                    <div className="columns is-centered">
                    <div className="column is-three-quarters">
                        <div className="columns is-vcentered">
                            <div className="column is-one-quarter is-right">
                                    <img src={user.profilePhoto} alt="placeholder"/>
                            </div>
                            <div className="column is-three-quarters">
                                <h1 className="subtitle profile-header-text">{user.name} {user.lastname}</h1>
                                <h1 className="title profile-header-text">@{user.username}</h1>
                                <p className="subtitle profile-header-text">Status actual: {user.status}</p>
                                <button onClick={() => showEditForm()} className="button button-white">Editar perfil</button>

                                <div className={isOpen ? "modal is-active" : "modal"} >
                                    <div className="modal-background"></div>
                                    <div className="modal-card">
                                        <header className="modal-card-head">
                                            <p className="modal-card-title"><b>Editar perfil</b></p>
                                            <button onClick={() => showEditForm()} className="delete" aria-label="close"></button>
                                        </header>
                                        <section className="modal-card-body">
                                            <form onSubmit={submitEditForm}>
                                                <div className="field">
                                                    <label className="label">Nombre<span className="help">No es obligatorio, compártelo sólo si lo deseas.</span></label>
                                                </div>
                                                <div className="field is-horizontal">
                                                    <div className="field-body">
                                                        <div className="field">
                                                            <div className="control">
                                                                <input onChange={handleInput} className="input" name="name" type="text" placeholder="Luis" value={user.name} />
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <div className="control">
                                                                <input onChange={handleInput} className="input" name="lastname" type="text" placeholder="Pérez" value={user.lastname} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <label className="label">Avatar</label>
                                                    <div className="control has-icons-left has-icons-right">
                                                        <input onChange={handleInput} className="input" name="username" type="text" placeholder="LP-1992" required value={user.username} />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-user"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="field is-hidden">
                                                    <label className="label">ID</label>
                                                    <div className="control has-icons-left has-icons-right">
                                                        <input onChange={handleInput} className="input" name="_id" type="text" placeholder="LP-1992" required value={user._id} />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-user"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="field is-grouped">
                                                    <div className="control">
                                                        <button className="button button-red">Editar perfil</button>
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
