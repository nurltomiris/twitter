import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import App from "./App";

require("dotenv")
.config();

ReactDOM.render(
    <>
        <CssBaseline/>
        <HashRouter basename={"/"}>
            <ToastProvider autoDismiss={ true } placement={ "bottom-center" }>
                <App/>
            </ToastProvider>
        </HashRouter>
    </>,
    document.getElementById("root")
);

