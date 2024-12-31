import { Theme } from "@/const/theme";
import { useState } from "react";

const ThemeProvider = ({ children, initialTheme}) => {
    const [theme, setTheme] = useState(initialTheme || Theme.);
};

export { ThemeProvider };
