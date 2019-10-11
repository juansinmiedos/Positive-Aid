import React from 'react'

export default function HomePublicPages() {
    return (
        <>
            <section className="section">
                <div className="columns is-centered">
                    <div className="column is-three-quarters">
                        <div className="columns is-vcentered">
                            <div className="column is-one-quarter">
                                <h1 className="title">Páginas públicas</h1>
                                <p>No necesitas crear una cuenta para conocer +.<br /><br />Accede a nuestras páginas públicas para informarte + acerca del VIH.</p>
                            </div>
                            <div className="column is-three-quarters">
                                <div className="tile is-ancestor scrolling-wrapper-flexbox">
                                    <div className="tile is-vertical is-4 cardd">
                                        <div className="tile">
                                            <div className="tile is-parent is-vertical">
                                                <div>
                                                    <figure className="image">
                                                        <img src="https://baucemag.com/wp-content/uploads/happy-black-woman.png" alt="publicImage" />
                                                    </figure>
                                                </div>
                                                <article className="tile is-child notification is-danger">
                                                    <p className="title">El VIH/SIDA</p>
                                                    <p className="subtittle">Conoce + acerca del VIH.</p>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="tile is-vertical is-4 cardd">
                                        <div className="tile">
                                            <div className="tile is-parent is-vertical">
                                                <div>
                                                    <figure className="image">
                                                        <img src="./1920.jpg" alt="publicImage" />
                                                    </figure>
                                                </div>
                                                <article className="tile is-child notification is-danger">
                                                    <p className="title">VIH y sustancias adictivas</p>
                                                    <p className="subtittle">Conoce + sobre los efectos secundarios y precauciones a tener.</p>
                                                </article>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="tile is-vertical is-4 cardd">
                                        <div className="tile">
                                            <div className="tile is-parent is-vertical">
                                                <div>
                                                    <figure className="image">
                                                        <img src="https://media2.s-nbcnews.com/j/newscms/2019_34/2983561/190823-black-woman-happy-beautiful-ac-500p_a96523f63b83fb4f15c5d1edbfb3ee34.fit-2000w.jpg" alt="publicImage" />
                                                    </figure>
                                                </div>
                                                <article className="tile is-child notification is-danger">
                                                    <p className="title">VIH y enfermedades</p>
                                                    <p className="subtittle">Conoce + sobre como se comporta el VIH al contraer enfermedades.</p>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile is-vertical is-4 cardd">
                                        <div className="tile">
                                            <div className="tile is-parent is-vertical">
                                                <div>
                                                    <figure className="image">
                                                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lose-weight-give-up-alcohol-1570450484.jpg?resize=768:*" alt="publicImage" />
                                                    </figure>
                                                </div>
                                                <article className="tile is-child notification is-danger">
                                                    <p className="title">Vivir con VIH</p>
                                                    <p className="subtittle">¿Cómo puede una persona con VIH mejorar su calidad de vida?</p>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tile is-vertical is-4 cardd">
                                        <div className="tile">
                                            <div className="tile is-parent is-vertical">
                                                <div>
                                                    <figure className="image">
                                                        <img src="./1920.jpg" alt="publicImage" />
                                                    </figure>
                                                </div>
                                                <article className="tile is-child notification is-danger">
                                                    <p className="title">Recibir ayuda</p>
                                                    <p className="subtittle">¿Has sido discriminado?, ¿Estás en una situación de riesgo? Recibe ayuda aquí.</p>
                                                </article>
                                            </div>
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