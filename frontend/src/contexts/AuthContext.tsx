import { useState, createContext, useContext, Dispatch, SetStateAction } from "react";

interface AuthContextType {
    isLoggedIn: boolean,
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => { }
})

export const AuthProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </ AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}