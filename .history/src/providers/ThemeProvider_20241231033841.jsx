import { LOCALSTORAGE_THEME_KEY } from "@/const/const";
import { Theme } from "@/const/theme";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

const ThemeProvider = ({ children, initialTheme}) => {
    const [theme, setTheme] = useState(initialTheme || Theme.LIGHT);

    useEffect(() => {
        const data = localStorage.getItem(LOCALSTORAGE_THEME_KEY)

        if(data) {
            setTheme(data)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem(LOCALSTORAGE_THEME_KEY, theme)
    }, [theme])

    

    return (
        <ThemeContext.Provider value={}>
            {children}
        </ThemeContext.Provider>
    )
};

export { ThemeProvider };
