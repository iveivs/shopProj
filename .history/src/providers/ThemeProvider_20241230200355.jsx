import { LOCALSTORAGE_THEME_KEY } from "@/const/const";
import { Theme } from "@/const/theme";
import { useEffect, useState } from "react";

export const ThemeContext = cre

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
};

export { ThemeProvider };
