import { useState } from "react";

const ThemeProvider = ({ children, initialTheme}) => {
    const [theme, setTheme] = useState(initialTheme);
};

export { ThemeProvider };
