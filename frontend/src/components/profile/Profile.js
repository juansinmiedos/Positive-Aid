import React, { Component } from 'react'
import Footer from '../footer/Footer';
import ProfileHero from './ProfileHero';
import ProfileHeader from './ProfileHeader';
import {Redirect} from 'react-router-dom'
import ProfileMenu from './ProfileMenu';
import ProfileGeneralStatus from './ProfileGeneralStatus';
import ProfileGeneralMeds from './ProfileGeneralMeds';
import ProfileGeneralDates from './ProfileGeneralDates';
import AUTH_SERVICE from '../../services/auth';

export default class Profile extends Component {
    state = {
        user: JSON.parse(localStorage.getItem('user')),
        isOpen: false
    }

    handleInput = (e) => {
        const { user } = this.state;
        const key = e.target.name;
        user[key] = e.target.value;
        this.setState({ user });
    };

    showEditForm = () => {
        if(this.state.isOpen === false){
            this.setState({
                isOpen: true
            })
        } else {
            this.setState({
                isOpen: false
            })
        }
    }

    submitEditForm = async(e) => {
        try{
            e.preventDefault()
            const response = await AUTH_SERVICE.update(this.state.user)
            this.setState({user: this.state.user})
            console.log(response.data)
            this.props.history.push('/perfil')

        } catch(error){
            console.log(error);
        }

        if(this.state.isOpen === false){
            this.setState({
                isOpen: true
            })
        } else {
            this.setState({
                isOpen: false
            })
        }
    }
    
    render() {
        if(JSON.parse(localStorage.getItem('user')) == null){
            return <Redirect to='/iniciar-sesion' />
        } else {
            return (
                <>
                    <ProfileHero />
                    <ProfileHeader user={this.state.user} showEditForm={this.showEditForm} isOpen={this.state.isOpen} submitEditForm={this.submitEditForm} handleInput={this.handleInput}/>
                    <ProfileMenu />
                    <ProfileGeneralStatus />
                    <ProfileGeneralMeds />
                    <ProfileGeneralDates />
                    <Footer />
                </>
            )
        }
    }
}


// submitEditForm = (e) => {
//         e.preventDefault()
//         const {username, name, lastname, _id} = this.state.user
//         const updatedUser = {username, name, lastname, _id}
//         console.log('este es update user' + updatedUser)
//         console.log(updatedUser)

//         AUTH_SERVICE.update(updatedUser)
//         .then((response) => {
//             this.setState({
//                 user: updatedUser
//             })
//             this.props.history.push('/perfil')
//         })
//         .catch((error) => {
//             console.log(error);
//         })

//         if(this.state.isOpen === false){
//             this.setState({
//                 isOpen: true
//             })
//         } else {
//             this.setState({
//                 isOpen: false
//             })
//         }
//     }