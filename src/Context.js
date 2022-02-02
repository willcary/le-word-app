import React, { useState, useEffect, useRef } from 'react'

const Context = React.createContext();

function ContextProvider({children}) {
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [theme, setTheme] = useState('light');
    
    const initialRenderOne = useRef(true);
    const initialRenderTwo = useRef(true);

    
    function handleChange(e) {
        const { name, value } = e.target;
        // setLocations( prevLocations => {
        //     return {
        //         ...prevLocations,
        //         [name]: value
        //     }
        // })
    }

// Theme Toggler Function =================================================================================================================
    function themeToggler() {
        if (theme === 'light') {
            setTheme('dark')
            document.body.classList.add('body-dark');
        } else {
            setTheme('light');
            document.body.classList.remove('body-dark');
        }
    }


    return (
        <Context.Provider value={{
            // loading,
            error,
            theme,
            handleChange,
            themeToggler
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };