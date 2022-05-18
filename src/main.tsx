import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { Routes } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

//TODO: apply mask to all necessary inputs
//TODO: implement a loading screen
//TODO: implement a button on header to hide/show the sidenav
//TODO: responsivity
//TODO: implement a warn to create, update and delete transactions
//TODO change all hrefs to Link to...

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <AuthProvider>
            <Routes />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
