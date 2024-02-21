import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext()

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
   

    const storeDarkMode = localStorage.getItem("darkTheme")
    console.log(prefersDarkMode);
    if(storeDarkMode === null) return prefersDarkMode
    
    return storeDarkMode === "true";
}

export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());

    const [searchTerm, setSearchTerm] = useState("live")

    // fn control logic
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme)

        // ** alternative setup **
        // document.body.classList.toggle('dark-theme', newDarkTheme);
        localStorage.setItem("darkTheme", newDarkTheme)
    };

    useEffect(()=> {
        document.body.classList.toggle('dark-theme', isDarkTheme);
    }, [isDarkTheme])
    
    return (
        <AppContext.Provider value={{
            isDarkTheme,toggleDarkTheme, searchTerm, setSearchTerm   
        }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)