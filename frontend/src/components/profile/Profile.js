import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer';
import ProfileHero from './ProfileHero';
import ProfileHeader from './ProfileHeader';

export default class Profile extends Component {
    state = {
        user: JSON.parse(localStorage.getItem('user'))
    }
    
    render() {
        return (
            <>
                <Navbar />
                <ProfileHero />
                <ProfileHeader />
                <Footer />
            </>
        )
    }
}
