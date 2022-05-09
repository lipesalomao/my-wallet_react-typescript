import { Routes, Route } from "react-router-dom";
import { AppContainer } from "../components/AppContainer";
import { List } from "../pages/list";
import { New } from "../pages/new";
import { Home } from "../pages/home";

export function App() {
    return (
        <AppContainer>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/list/:type" element={<List />} />
            </Routes>
        </AppContainer>
    );
}
