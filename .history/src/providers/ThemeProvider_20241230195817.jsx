import { Theme } from "@/const/theme";
import { useEffect, useState } from "react";

const ThemeProvider = ({ children, initialTheme}) => {
    const [theme, setTheme] = useState(initialTheme || Theme.LIGHT);

    useEffect(() => {
        const
    }, [])
};

export { ThemeProvider };
