import React, { Component } from 'react'
import Footer from '../footer/Footer';
import ProfileHero from './ProfileHero';
import ProfileHeader from './ProfileHeader';
import {Redirect} from 'react-router-dom'
import ProfileGeneralStatus from './ProfileGeneralStatus';
import ProfileGeneralMeds from './ProfileGeneralMeds';
import ProfileGeneralDates from './ProfileGeneralDates';
import AUTH_SERVICE from '../../services/auth';

export default class Profile extends Component {
    state = {
        user: JSON.parse(localStorage.getItem('user')),
        labs: {
            date: '',
            cd4: '',
            cargaViral: '',
            trigliceridos: '',
            fnHepatica: '',
            fnRenal: '',
            user: JSON.parse(localStorage.getItem('user'))
        },
        allLabs: [
            {cargaViral: '',
            cd4: '',
            createdAt: '',
            date: '',
            fnHepatica: '',
            fnRenal: '',
            trigliceridos: '',
            updatedAt: '',
            user: '',
            _id: ''}
        ],
        isOpen: false,
        labsIsOpen: false
    }

    promiseOfLabs = async() => {
        const response = await AUTH_SERVICE.getLabs(this.state.user._id)
        const arrayOfLabs = response.data.allLabs
        this.setState({allLabs: arrayOfLabs})
    }

    componentDidMount(){
        this.promiseOfLabs()
    }

    handleInput = (e) => {
        const { user, labs } = this.state;
        const key = e.target.name;
        user[key] = e.target.value;
        labs[key] = e.target.value;
        this.setState({ user, labs });
    };

    handleNumberInput = (e) => {
        const { user, labs } = this.state;
        const key = e.target.name;
        labs[key] = Number(e.target.value);
        this.setState({ user, labs });
    };

    handleDateInput = (e) => {
        const { user, labs } = this.state;
        const key = e.target.name;
        labs[key] = new Date(e.target.value);
        this.setState({ user, labs });
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

    showLabsForm = () => {
        if(this.state.labsIsOpen === false){
            this.setState({
                labsIsOpen: true
            })
        } else {
            this.setState({
                labsIsOpen: false
            })
        }
    }

    submitEditForm = async(e) => {
        try{
            e.preventDefault()
            const response = await AUTH_SERVICE.update(this.state.user)
            console.log(response)
            this.setState({user: this.state.user})
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

    submitLabsForm = async(e) => {
        try{
            e.preventDefault()
            const response = await AUTH_SERVICE.addLabs(this.state.labs)
            this.setState({
                labs: this.state.labs
            })
            console.log(response.data)

            this.props.history.push('/perfil')

        } catch(error){
            console.log(error);
        }

        if(this.state.labsIsOpen === false){
            this.setState({
                labsIsOpen: true
            })
        } else {
            this.setState({
                labsIsOpen: false
            })
        }
    }
    
    render() {
        console.log(this.state.allLabs)
        if(JSON.parse(localStorage.getItem('user')) == null){
            return <Redirect to='/iniciar-sesion' />
        } else {
            return (
                <>
                    <ProfileHero />
                    <ProfileHeader user={this.state.user} showEditForm={this.showEditForm} isOpen={this.state.isOpen} submitEditForm={this.submitEditForm} handleInput={this.handleInput}/>
                    <ProfileGeneralStatus user={this.state.user} showLabsForm={this.showLabsForm} labsIsOpen={this.state.labsIsOpen} submitLabsForm={this.submitLabsForm} handleNumberInput={this.handleNumberInput} handleDateInput={this.handleDateInput} allLabs={this.state.allLabs} />
                    <ProfileGeneralMeds />
                    <ProfileGeneralDates />
                    <Footer />
                </>
            )
        }
    }
}