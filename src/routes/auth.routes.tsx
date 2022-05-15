import { Route, Routes } from "react-router-dom";
import { AppContainer } from "../components/AppContainer";
import { Login } from "../pages/login";
import { SignUp } from "../pages/SignUp";

export function Auth() {
    return (

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>

    );
}
