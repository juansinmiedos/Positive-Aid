import React from 'react'
import {Link} from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

export default function HomeHero() {

    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

    const sessionChecker = () => {
        const sessionaux = JSON.parse(localStorage.getItem('user'))
        if(sessionaux == null){
            return(
                <Link to="/crear-cuenta"><button className="button button-white">Crear una cuenta</button></Link>
            )
        }
    }

    function Card() {
        const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
        return (
            <animated.div
            className="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
            />
        )
    }

    return (
        <>
            <section className="hero is-danger is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-5 is-vcentered">
                            {/* <div className="column">
                                <img src="https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&w=1000&q=80" alt="main-pic"/>
                            </div> */}
                            <div className="column">
                                {Card()}
                            </div>
                            <div className="column">
                                <h1 className="title is-size-1">(+)aid</h1>
                                <h2 className="subtitle is-size-4">Una plataforma para ayudarte a vivir mejor.</h2>
                                {sessionChecker()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section heigh75">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-full">
                            <h1 className="title">¿Qué es +aid?</h1>
                            <p className="subtitle">Somos una plataforma diseñada para ayudar a quienes viven con VIH a dar un mejor seguimiento a su tratamiento y mantener un control de citas y medicamentos.<br />Encuentra también información general actualizada sobre el VIH y su tratamiento en nuestras páginas públicas.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section heigh75">
                <div className="columns is-centered">
                    <div className="column is-three-quarters">
                        <div className="columns">
                            <div className="column is-half">
                    
                            </div>
                            <div className="column is-half">
                                <h1 className="title">Tu información, segura</h1>
                                <p className="subtitle">Somos conscientes de lo sensible que es tu información, es por eso que no compartiremos con ningún tercero la información que confies en nuestra plataforma.<br /><br />No es necesario que proporciones tu nombre y apellido para crear una cuenta, puedes crearla usando un avatar anónimo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}