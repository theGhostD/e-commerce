import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

//actually value you want to access and takes the dedfault value
export const userContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null
});
    

//the provider is the actual component that takes in children

export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser,setCurrentUser}

    return <userContext.Provider value={value }>{children}</userContext.Provider>
}
