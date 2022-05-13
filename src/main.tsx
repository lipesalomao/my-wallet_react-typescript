import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

//TODO: apply mask to all necessary inputs
//TODO: implement a loading screen
//TODO: implement a button on header to hide/show the sidenav
//TODO: responsivity
//TODO: implement a warn to create, update and delete transactions

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <Routes />
    </React.StrictMode>,
    document.getElementById("root")
);
