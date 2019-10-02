import React, { Component } from 'react'
import Footer from '../footer/Footer';
import ProfileHero from './ProfileHero';
import ProfileHeader from './ProfileHeader';
import {Redirect} from 'react-router-dom'

export default class Profile extends Component {
    state = {
        user: JSON.parse(localStorage.getItem('user'))
    }
    
    render() {
        if(JSON.parse(localStorage.getItem('user')) == null){
            return <Redirect to='/iniciar-sesion' />
        } else {
            return (
                <>
                    <ProfileHero />
                    <ProfileHeader user={this.state.user} />
                    <Footer />
                </>
            )
        }
    }
}
