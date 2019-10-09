import React, { Component } from 'react'
import Footer from '../footer/Footer';
import ProfileHeader from './ProfileHeader';
import {Redirect} from 'react-router-dom'
import ProfileGeneralStatus from './ProfileGeneralStatus';
import ProfileGeneralMeds from './ProfileGeneralMeds';
import ProfileGeneralDates from './ProfileGeneralDates';

// SERVICES
import AUTH_SERVICE from '../../services/auth';
import PUBLIC_SERVICE from '../../services/public';
import LABS_SERVICE from '../../services/labs';
import MEDICATION_SERVICE from '../../services/medication';
import APPOINTMENT_SERVICE from '../../services/appointment';

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
        meds: {
            med: '',
            frequency: '',
            startHour: '',
            user: JSON.parse(localStorage.getItem('user'))
        },
        appointments: {
            place: '',
            typeOfAppointment: '',
            withWhom: '',
            date: '',
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
        allMeds: [
            {med: '',
            frequency: '',
            startHour: '',
            user: '',
            _id: ''}
        ],
        allAppointments: [
            {place:'',
            typeOfAppointment: '',
            withWhom: '',
            date: '',
            user: '',
            _id: ''}
        ],
        medicinesInfo: [
            {name: '',
            commonName: '',
            description: '',
            typeOfMed: '',
            statusOfRec: ''}
        ],
        isOpen: false,
        labsIsOpen: false,
        medsIsOpen: false,
        appointmentsIsOpen: false,
    }

    // PROMISES
    promiseOfLabs = async() => {
        const response = await LABS_SERVICE.getLabs(this.state.user._id)
        const arrayOfLabs = response.data.allLabs
        this.setState({allLabs: arrayOfLabs})
    }

    promiseOfMeds = async() => {
        const response = await MEDICATION_SERVICE.getMedication(this.state.user._id)
        const arrayOfMeds = response.data.allMeds
        this.setState({allMeds: arrayOfMeds})
    }

    promiseOfAppointments = async() => {
        const response = await APPOINTMENT_SERVICE.getAppointment(this.state.user._id)
        const arrayOfAppointments = response.data.allAppointments
        this.setState({allAppointments: arrayOfAppointments})
        
    }

    promiseOfMedicineInfo = async() => {
        const response = await PUBLIC_SERVICE.medicines()
        const arrayOfMedicines = response.data.medicines
        this.setState({medicinesInfo: arrayOfMedicines})
    }

    componentDidMount(){
        this.promiseOfLabs()
        this.promiseOfMeds()
        this.promiseOfAppointments()
        this.promiseOfMedicineInfo()
    }

    // INPUT HANDLERS ACOORDIDING TO DATA TYPE
    handleInput = (e) => {
        const { user, labs, meds, appointments } = this.state;
        const key = e.target.name;
        user[key] = e.target.value;
        labs[key] = e.target.value;
        meds[key] = e.target.value;
        appointments[key] = e.target.value;
        this.setState({ user, labs, meds, appointments });
        
    };

    handleNumberInput = (e) => {
        const { user, labs, meds, appointments } = this.state;
        const key = e.target.name;
        user[key] = Number(e.target.value);
        labs[key] = Number(e.target.value);
        meds[key] = Number(e.target.value);
        appointments[key] = Number(e.target.value);
        this.setState({ user, labs, meds, appointments });
    };

    handleDateInput = (e) => {
        const { user, labs, meds, appointments } = this.state;
        const key = e.target.name;
        user[key] = new Date(e.target.value);
        labs[key] = new Date(e.target.value);
        meds[key] = new Date(e.target.value);
        appointments[key] = new Date(e.target.value);
        this.setState({ user, labs, meds, appointments });
    };

     // SHOW AND HIDE MODALS LOGICS
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

    showMedsForm = () => {
        if(this.state.medsIsOpen === false){
            this.setState({
                medsIsOpen: true
            })
        } else {
            this.setState({
                medsIsOpen: false
            })
        }
    }

    showAppointmentsForm = () => {
        if(this.state.appointmentsIsOpen === false){
            this.setState({
                appointmentsIsOpen: true
            })
        } else {
            this.setState({
                appointmentsIsOpen: false
            })
        }
    }

    // FORMS SUBMITS
    submitEditForm = async(e) => {
        try{
            e.preventDefault()
            await AUTH_SERVICE.update(this.state.user)
            this.setState({user: this.state.user})
            this.componentDidMount()
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
            await LABS_SERVICE.addLabs(this.state.labs)
            this.setState({ labs: this.state.labs })
            this.componentDidMount()
            this.props.history.push('/perfil')
            
        } catch(error){
            console.log(error);
        }

        this.showLabsForm()
    }

    submitMedsForm = async(e) => {
        try{
            e.preventDefault()
            await MEDICATION_SERVICE.addMedication(this.state.meds)
            this.setState({ meds: this.state.meds })
            this.componentDidMount()
            this.props.history.push('/perfil')
        } catch(error){
            console.log(error)
        }

        if(this.state.medsIsOpen === false){
            this.setState({
                medsIsOpen: true
            })
        } else {
            this.setState({
                medsIsOpen: false
            })
        }
    }

    submitAppointmentsForm = async(e) => {
        try{
            e.preventDefault()
            await APPOINTMENT_SERVICE.addAppointment(this.state.appointments)
            this.setState({ appointments: this.state.appointments })
            this.componentDidMount()
            this.props.history.push('/perfil')
        } catch(error){
            console.log(error)
        }

        if(this.state.appointmentsIsOpen === false){
            this.setState({
                appointmentsIsOpen: true
            })
        } else {
            this.setState({
                appointmentsIsOpen: false
            })
        }
    }

    //DELETERS
    deleteLabs = async(e) => {
        try{
            await LABS_SERVICE.deleteLabs(e)
            this.componentDidMount()
            this.props.history.push('/perfil')
        } catch(error){
            console.log(error)
        }
    }

    deleteMeds = async(e) => {
        try{
            await MEDICATION_SERVICE.deleteMedication(e)
            this.componentDidMount()
            this.props.history.push('/perfil')
        } catch(error){
            console.log(error)
        }
    }

    deleteAppointments = async(e) => {
        try{
            await APPOINTMENT_SERVICE.deleteAppointment(e)
            this.componentDidMount()
            this.props.history.push('/perfil')
        } catch(error){
            console.log(error)
        }
    }
    
    render() {
        if(JSON.parse(localStorage.getItem('user')) == null){
            return <Redirect to='/iniciar-sesion' />
        } else {
            return (
                <>
                    <ProfileHeader user={this.state.user} showEditForm={this.showEditForm} isOpen={this.state.isOpen} submitEditForm={this.submitEditForm} handleInput={this.handleInput}/>

                    <ProfileGeneralStatus user={this.state.user} showLabsForm={this.showLabsForm} labsIsOpen={this.state.labsIsOpen} submitLabsForm={this.submitLabsForm} handleNumberInput={this.handleNumberInput} handleDateInput={this.handleDateInput} allLabs={this.state.allLabs} deleteLabs={this.deleteLabs} />

                    <ProfileGeneralMeds user={this.state.user} showMedsForm={this.showMedsForm} medsIsOpen={this.state.medsIsOpen} submitMedsForm={this.submitMedsForm} handleInput={this.handleInput} handleNumberInput={this.handleNumberInput} handleDateInput={this.handleDateInput} allMeds={this.state.allMeds} medicinesInfo={this.state.medicinesInfo} deleteMeds={this.deleteMeds} meds={this.state.meds} />

                    <ProfileGeneralDates user={this.state.user} showAppointmentsForm={this.showAppointmentsForm} appointmentsIsOpen={this.state.appointmentsIsOpen} submitAppointmentsForm={this.submitAppointmentsForm} handleInput={this.handleInput} handleDateInput={this.handleDateInput} allAppointments={this.state.allAppointments} deleteAppointments={this.deleteAppointments} />
                    <Footer />
                </>
            )
        }
    }
}