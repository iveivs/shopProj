import { LOCALSTORAGE_THEME_KEY } from "@/const/const";
import { Theme } from "@/const/theme";
import { useEffect, useState } from "react";

const ThemeProvider = ({ children, initialTheme}) => {
    const [theme, setTheme] = useState(initialTheme || Theme.LIGHT);

    useEffect(() => {
        const data = localStorage.getItem(LOCALSTORAGE_THEME_KEY)

        if
    }, [])
};

export { ThemeProvider };
