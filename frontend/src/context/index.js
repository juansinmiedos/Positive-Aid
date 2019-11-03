import React, { Component, createContext } from 'react'

// SERVICES
import AUTH_SERVICE from '../services/auth';
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

    toLogIn = (loggedUser) => {        
        this.setState(prevState => { 
            return {
                ...prevState,
                user: loggedUser,
                loggedChecker: 'yes'
            } 
        })
    }

    toLogOut = async() => {
        try{
            await AUTH_SERVICE.logout()
            this.setState(prevState => {
                return {
                    ...prevState,
                    user: {},
                    loggedChecker: null
                }
            })
        } catch(err){
            console.log(err);
        }
    };

    // updateHealthStatus = async() => {
    //     if(this.state.allLabs[this.state.allLabs.length - 1].cargaViral >= 10){

    //         this.setState(prevState => {
    //             return {
    //                 ...prevState,
    //                 user: {...prevState.user, status: 'SIDA'}
    //             }
    //         })
    //         await AUTH_SERVICE.update(this.state.user)

    //     } else if(this.state.allLabs[this.state.allLabs.length - 1].cargaViral < 3){
    //         this.setState(prevState => {
    //             return {
    //                 ...prevState,
    //                 user: {...prevState.user, status: 'Indetectable'}
    //             }
    //         })
    //         await AUTH_SERVICE.update(this.state.user)
    //     } else{
    //         this.setState(prevState => {
    //             return {
    //                 ...prevState,
    //                 user: {...prevState.user, status: 'Detectable'}
    //             }
    //         })
    //         await AUTH_SERVICE.update(this.state.user)
    //     }
    // }
    
    allPromises = async() => {
        const labsResponse = await LABS_SERVICE.getLabs(this.state.user._id)
        const medsResponse = await MEDICATION_SERVICE.getMedication(this.state.user._id)
        const appointmentsResponse = await APPOINTMENT_SERVICE.getAppointment(this.state.user._id)
        const medicineInfoResponse = await PUBLIC_SERVICE.medicines()

        if(labsResponse.data.allLabs[0] !== undefined){
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
        } else {
            const arrayOfMeds = medsResponse.data.allMeds
            const arrayOfAppointments = appointmentsResponse.data.allAppointments
            const arrayOfMedicines = medicineInfoResponse.data.medicines

            this.setState({
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
                allMeds: arrayOfMeds,
                allAppointments: arrayOfAppointments,
                medicinesInfo: arrayOfMedicines
            })
        }

    }

    render() {
        const {state, toLogIn, toLogOut, updateHealthStatus, allPromises} = this;
        return (
            <MyContext.Provider value={{state, toLogIn, toLogOut, updateHealthStatus, allPromises}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
