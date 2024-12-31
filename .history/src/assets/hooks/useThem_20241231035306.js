import { Theme } from "@/const/theme"
import { ThemeContext } from "@/providers/ThemeProvider"
import { useContext } from "react"

const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        let newTheme 

        switch (theme) {
            case Theme:
                
                break;
        
            default:
                break;
        }
    }
    return <div></div>
}

export { useTheme }