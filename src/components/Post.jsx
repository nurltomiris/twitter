import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Card, IconButton, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ id, createdAt, title, userEmail, isEdit, updatePost, setIsEdit }) => {

    const navigate = useNavigate();
    const [newTitle, setNewTitle] = useState(title);
    const goToPostView = () => {
        navigate(`/post/${ id }`);
    };

    return (
        <Card
            sx={ {
                width: 600,
                p: 2,
                cursor: "pointer"
            } }
            onClick={ goToPostView }
        >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography
                    sx={ theme => ({
                        fontWeight: theme.typography.fontWeightBold
                    }) }
                >
                    { userEmail }
                </Typography>
                <Typography>
                    { new Date(createdAt.seconds * 1000).toLocaleString() }
                </Typography>
            </Stack>
            <Box>
                {
                    isEdit ?
                        <Stack
                            component="form"
                            onSubmit={ e => {
                                e.preventDefault();
                                updatePost(newTitle);
                            } }
                            direction="row"
                            alignItems="center"
                            spacing={ 1 }
                        >
                            <TextField value={ newTitle } onChange={ e => setNewTitle(e.target.value) }/>
                            <IconButton type="submit">
                                <CheckIcon/>
                            </IconButton>
                            <IconButton onClick={ () => setIsEdit(false) }>
                                <CloseIcon/>
                            </IconButton>
                        </Stack>
                        :
                        title
                }
            </Box>
        </Card>
    );
};

export default Post;