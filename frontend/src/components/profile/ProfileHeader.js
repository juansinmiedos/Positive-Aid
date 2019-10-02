import React from 'react'

export default function ProfileHeader({user}) {
    console.log(user)
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <figure className="image is-128x128">
                                <img className="is-rounded" src={user.profilePhoto} alt="placeholder"/>
                            </figure>
                        </div>
                        <div className="column is-half">
                            <h1 className="subtitle">{user.name} {user.lastname}</h1>
                            <h1 className="title">{user.username}</h1>
                            <p className="subtitle">Sexo<br/>Status</p>
                            <button className="button is-danger">Editar perfil</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
