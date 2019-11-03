import React, { Component } from 'react'
import { MyContext } from '../../context';
import {Redirect} from 'react-router-dom'

import ProfileHeader from './ProfileHeader';
import ProfileGeneralStatus from './ProfileGeneralStatus';
import ProfileGeneralMeds from './ProfileGeneralMeds';
import ProfileGeneralDates from './ProfileGeneralDates';
import Footer from '../footer/Footer';

export default class Profile extends Component {

    componentDidMount(){
        if (!this.context.state.loggedChecker) return this.props.history.push('/iniciar-sesion');
        // this.context.updateHealthStatus()
        this.context.profilePromises()
    }

    componentDidUpdate(){
        if (!this.context.state.loggedChecker) return this.props.history.push('/iniciar-sesion')
    }

    render() {
        if(this.context.state.loggedChecker == null){
            return <Redirect to='/iniciar-sesion' />
        } else {            
            return (
                <>
                    <ProfileHeader />
                    <ProfileGeneralStatus />
                    <ProfileGeneralMeds />
                    <ProfileGeneralDates  />
                    <Footer />
                </>
            )
        }
    }
}

Profile.contextType = MyContext;