import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

function AuthProvider({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function login(username, password) {
        if (username === "hamza" && password === "1234") {
            setIsAuthenticated(true);
            return true;
        } else {
            setIsAuthenticated(false);
            return false;
        }
    }

    function logout() {
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;