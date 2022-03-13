import React, {createContext, useState } from 'react';
import defaultUser from '../data';

const UserContext = createContext();
    
function UserProvider({ children }){
    const [user, setUser] = useState({
        name: 'Donny',
        interests: ["Being Cool", "Music but poorly", "Camping"]
    })

    const value = {
        user: user,
        setUser: setUser
    }
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

export { UserContext, UserProvider };