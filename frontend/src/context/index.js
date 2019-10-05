import React, { Component, createContext } from 'react'

export const MyContext = createContext();

export default class Provider extends Component {
    state = {
        pato: 'pato2'
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
