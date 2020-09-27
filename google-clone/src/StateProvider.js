import React, { createContext, useContext, useReducer } from 'react'

// Preparing the data layer
export const StateContext = createContext();

// Higher order component
// The children is the <App/> component
// Initial state is original look to app
// Reducer listens for changes
export const StateProvider = ({ reducer, initialState, children
}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);