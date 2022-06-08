import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signup";

export function Auth() {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}
