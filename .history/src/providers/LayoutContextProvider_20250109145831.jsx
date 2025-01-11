import { createContext, useState } from "react";

export const LayoutContext = createContext({})

const LayoutContextProvider = ({children}) => {
    useState(false)
}

export { LayoutContextProvider }