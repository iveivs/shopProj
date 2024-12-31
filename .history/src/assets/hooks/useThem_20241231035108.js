import { ThemeContext } from "@/providers/ThemeProvider"
import { useContext } from "react"

const useTheme = () => {
    const {} = useContext(ThemeContext)
    return <div></div>
}

export { useTheme }