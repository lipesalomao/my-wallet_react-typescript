import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { IUserModel } from "../../models/UserModel";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<IUserModel | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storagedData = localStorage.getItem("token");
            if (storagedData) {
                const data = await api.validateToken(storagedData);
                if (data) {
                    setUser(data);
                }
            }
        };
        validateToken();
    }, []);

    const signin = async (email: string, password: string): Promise<boolean> => {    
        localStorage.setItem("token",'AFoau1346i1oih4156ph1p23h5ph16'); // TEMP *****************
        
        const data =  await api.signin(email, password);
        
        if (data.user && data.token) {
            
            setTokenOnLocalStorage(data.token);
            setUser(data.user);
            return true;
        }
        
        return false;
    };

    function setTokenOnLocalStorage(token: string) {
        localStorage.setItem("token", token);
    }

    const signout = async () => {
        await api.signout();
        setUser(null);
        setTokenOnLocalStorage('');
    };

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};
