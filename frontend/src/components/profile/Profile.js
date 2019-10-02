import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer';
import ProfileHero from './ProfileHero';
import ProfileHeader from './ProfileHeader';

export default class Profile extends Component {
    state = {
        user: JSON.parse(localStorage.getItem('user'))
    }

    componentDidMount(){
        if(!JSON.parse(localStorage.getItem('user'))) return this.props.history.push('/iniciar-sesion')
    }
    
    render() {
        return (
            <>
                <Navbar />
                <ProfileHero />
                <ProfileHeader user={this.state.user} />
                <Footer />
            </>
        )
    }
}
