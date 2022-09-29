import { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();

function AuthContextProvider({children}){
    const [isAuth, setAuth] = useState(false);
    const [tok, setTok] = useState("");

    const handle = (temp) => {
        setAuth(true);
        setTok(temp);
    }

    return <AuthContext.Provider value={{isAuth, tok, handle}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;