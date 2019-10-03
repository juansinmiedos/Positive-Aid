import React from 'react'
import {Link} from 'react-router-dom'

export default function ProfileMenu() {
    return (
        <>
            <section className="section">
                <div>
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <div className="tabs is-boxed">
                                <ul>
                                    <li className="is-active">
                                        <Link to="/">
                                            <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
                                            <span>Reporte general</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
                                            <span>Análisis</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <span className="icon is-small"><i className="fas fa-film" aria-hidden="true"></i></span>
                                            <span>Medicación</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <span className="icon is-small"><i className="far fa-file-alt" aria-hidden="true"></i></span>
                                            <span>Citas</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
