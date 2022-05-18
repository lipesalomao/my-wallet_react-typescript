import { createContext } from "react";
import { IUserModel } from "../../models/UserModel";

export type AuthContextType = {
    user: IUserModel[] | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
