import React from "react";
import { Link, useMatch } from "react-router-dom";
import { Button } from "@mui/material";

const NavButton = ({ children, to, ...props }) => {
    const match = useMatch(to);

    return (
        <Link to={ to } { ...props } style={ { textDecoration: "none" } }>
            <Button
                variant="text"
                sx={ theme => ({
                    color: theme.palette.common.white,
                    textDecoration: match ? "underline" : "none"
                }) }
            >
                { children }
            </Button>
        </Link>
    );
};

export default NavButton;