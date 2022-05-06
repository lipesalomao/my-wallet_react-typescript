import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";

export function Auth() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}
