import React, { Component, createContext } from 'react'

export const MyContext = createContext();

export default class Provider extends Component {
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
        confirmationLabsDeleteIsOpen: false,
        currentLabOfDeletion: '',
        confirmationMedsDeleteIsOpen: false,
        currentMedOfDeletion: '',
        confirmationAppointmentsDeleteIsOpen: false,
        currentAppointmentOfDeletion: '',
    }

    render() {
        const {state} = this;
        return (
            <MyContext.Provider value={{state}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
