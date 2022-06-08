import { Routes, Route, Navigate } from "react-router-dom";
import { AppContainer } from "../components/AppContainer";
import { In } from "../pages/in";
import { New } from "../pages/new";
import { Home } from "../pages/home";
import { Out } from "../pages/out";


export function App() {
    return (
        <AppContainer>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="new" element={<New />} />
                <Route path="edit/:id" element={<New />} />
                <Route path="in" element={<In />} />
                <Route path="out" element={<Out />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </AppContainer>
    );
}
