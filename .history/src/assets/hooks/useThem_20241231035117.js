import { ThemeContext } from "@/providers/ThemeProvider"
import { useContext } from "react"

const useTheme = () => {
    const {theme, set} = useContext(ThemeContext)
    return <div></div>
}

export { useTheme }