import { Theme } from "@/const/theme"
import { ThemeContext } from "@/providers/ThemeProvider"
import { useContext } from "react"

const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        let newTheme 

        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT
                break;
        switch (theme) {
            case Theme.LIGHT:
                newTheme = Theme.DARK
                break;
        
            default:
                newTheme = Theme.LIGHT
        }

        setTheme(newTheme)
    }
    return <div></div>
}
\