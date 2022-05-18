import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { IUserModel } from "../../models/UserModel";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<IUserModel[] | null>(null);
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

    const signin = async (
        email: string,
        password: string
    ): Promise<boolean> => {
        const data = await api.signin(email, password);

        if (data.user && data.token) {
            setUser(data.user);
            localStorage.setItem("token", data.token);
            return true;
        }
        return false;
    };

    const signout = async () => {
        await api.signout();
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};
