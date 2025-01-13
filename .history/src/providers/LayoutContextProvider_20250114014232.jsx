import { createContext, useState } from "react";

export const LayoutContext = createContext({})

const LayoutContextProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [popup, setPopup] = useState(false)

    const handleClick = () => setIsOpen((prev) => !prev)

    const openPopap = () => {
        setPopup
    }

    const value = {
        isOpen,
        handleClick,
        setIsOpen,
    }

    return < LayoutContext.Provider value={value}>
        {children}
    </LayoutContext.Provider>
}

export { LayoutContextProvider }