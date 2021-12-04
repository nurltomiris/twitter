import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, Divider, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "../../contexts/AuthContext";

//Страница авторизации и регистрации
const Auth = () => {

    const { register, signInWithGoogle, login } = useAuth();
    const { addToast } = useToasts();
    const location = useLocation();
    const isRegister = location.pathname === "/register";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchRegister = (email, password) => {
        setLoading(true);

        register(email, password)
        .catch((e) => {
            addToast(e.message, { appearance: "error" });
        })
        .finally(() => {
            setLoading(false);
        });
    };

    const fetchLogin = (email, password) => {
        setLoading(true);

        login(email, password)
        .catch((e) => {
            addToast(e.message, { appearance: "error" });
        })
        .finally(() => {
            setLoading(false);
        });
    };

    const fetchLoginWithGoogle = () => {
        setLoading(true);

        signInWithGoogle()
        .catch((e) => {
            addToast(e.message, { appearance: "error" });
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <Stack spacing={ 2 } alignItems="center">
            <Typography variant="h3">{ isRegister ? "Register" : "Login" }</Typography>
            <Box
                sx={ {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                } }
            >
                <Paper
                    sx={ {
                        width: 600,
                        p: 2
                    } }
                >
                    <Box component="form">
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email"
                            value={ email }
                            onChange={ e => setEmail(e.target.value) }
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Password"
                            type="password"
                            value={ password }
                            onChange={ e => setPassword(e.target.value) }
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={ {
                                my: 2
                            } }
                            onClick={ () => isRegister ? fetchRegister(email, password) : fetchLogin(email, password) }
                            disabled={ loading }
                        >
                            { isRegister ? "Sign Up" : "Sign In" }
                        </Button>
                    </Box>
                    <Divider sx={ { my: 2 } }><Typography>OR</Typography></Divider>
                    <Box
                        sx={ {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        } }
                    >
                        <Button
                            startIcon={ <GoogleIcon/> }
                            variant="contained"
                            onClick={ fetchLoginWithGoogle }
                            disabled={ loading }
                        >
                            Sign in with Google
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Stack>
    );
};

export default Auth;