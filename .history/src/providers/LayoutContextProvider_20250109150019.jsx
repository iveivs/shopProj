import { createContext, useState } from "react";

export const LayoutContext = createContext({})

const LayoutContextProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => setIsOpen((prev) => !prev)

    const value = {
        
    }
}

export { LayoutContextProvider }