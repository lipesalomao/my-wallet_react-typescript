import { Route, Routes } from "react-router-dom";
import { AppContainer } from "../components/AppContainer";
import { Login } from "../pages/login";
import { SignUp } from "../pages/SignUp";

export function Auth() {
    return (
        <AppContainer>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </AppContainer>
    );
}
