import React, { Component, createContext } from 'react'

// SERVICES
import PUBLIC_SERVICE from '../services/public';
import LABS_SERVICE from '../services/labs';
import MEDICATION_SERVICE from '../services/medication';
import APPOINTMENT_SERVICE from '../services/appointment';

export const MyContext = createContext();

export default class Provider extends Component {
    state = {
        user: {},
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
        loggedChecker: null
    }

    logUser = (loggedUser) => {        
        this.setState(prevState => { 
            return {
                ...prevState,
                user: loggedUser,
                loggedChecker: 'yes'
            } 
        })
    }

    // PROMISES
    allPromises = async() => {
        const labsResponse = await LABS_SERVICE.getLabs(this.state.user._id)
        const medsResponse = await MEDICATION_SERVICE.getMedication(this.state.user._id)
        const appointmentsResponse = await APPOINTMENT_SERVICE.getAppointment(this.state.user._id)
        const medicineInfoResponse = await PUBLIC_SERVICE.medicines()

        const arrayOfLabs = labsResponse.data.allLabs
        const arrayOfMeds = medsResponse.data.allMeds
        const arrayOfAppointments = appointmentsResponse.data.allAppointments
        const arrayOfMedicines = medicineInfoResponse.data.medicines

        this.setState({
            allLabs: arrayOfLabs,
            allMeds: arrayOfMeds,
            allAppointments: arrayOfAppointments,
            medicinesInfo: arrayOfMedicines
        })
    }

    render() {
        const {state, logUser, allPromises} = this;
        return (
            <MyContext.Provider value={{state, logUser, allPromises}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
