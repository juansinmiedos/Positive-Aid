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
        this.context.allPromises()
    }

    componentDidUpdate(){
        if (!this.context.state.loggedChecker) return this.props.history.push('/iniciar-sesion')
    }

    //STATUS UPDATER
    // updateHealthStatus = async() => {
    //     if(this.state.allLabs[this.state.allLabs.length - 1].cargaViral >= 10){

    //         const newStatus = (() => this.state.user.status = 'SIDA')

    //         await AUTH_SERVICE.update(this.state.user)
    //         this.setState(prevState => {
    //             return {
    //                 ...prevState,
    //                 status: newStatus
    //             }
    //         })
    //         this.componentDidMount()
    //         this.props.history.push('/perfil')
    //     } 
    // }

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