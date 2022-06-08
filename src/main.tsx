import ReactDOM from "react-dom";
import React from "react";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { Routes } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
            <AuthProvider>
                <Routes />
            </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
