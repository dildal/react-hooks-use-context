import React, {createContext, useState } from 'react';

const ThemeContext = createContext();
    
function ThemeProvider({ children }){
    const [theme, setTheme] = useState('light');

    const value = {
        theme: theme,
        setTheme: setTheme
    }
    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider };