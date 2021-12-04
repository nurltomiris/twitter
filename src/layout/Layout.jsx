import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Header/>
            <Container maxWidth="xl" sx={ { my: "78px" } }>
                <Outlet/>
            </Container>
        </>
    );
};

export default Layout;