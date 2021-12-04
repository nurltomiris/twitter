import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavButton from "../components/NavButton";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {

    const { currentUser, logout } = useAuth();

    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
                        <Link to="/" style={ { textDecoration: "none", color: "#fff" } }>
                            Twitter
                        </Link>
                    </Typography>
                    {
                        currentUser ?
                            <>
                                <NavButton to="/profile">Profile</NavButton>
                                <NavButton to="/my-posts">My Posts</NavButton>
                                <NavButton to="/add-post">Add post</NavButton>
                                <Button
                                    sx={ {
                                        color: theme => theme.palette.common.white
                                    } }
                                    onClick={ logout }
                                >
                                    Logout
                                </Button>
                            </>
                            :
                            <>
                                <NavButton to="/login">Login</NavButton>
                                <NavButton to="/register">Register</NavButton>
                            </>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;