import { ThemeContext } from "@/providers/ThemeProvider"
import { useContext } from "react"

const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    return <div></div>
}

export { useTheme }