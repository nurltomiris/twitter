import { Button, Stack, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../utils/firebaseConfig";

//Компонент добавления поста
const AddPost = () => {

    const [title, setTitle] = useState("");
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const { addToast } = useToasts();
    const handleAddPost = async e => {
        e.preventDefault();
        setLoading(true);
        await addDoc(collection(db, "posts"), {
            title,
            createdAt: new Date(),
            userId: currentUser.uid,
            userEmail: currentUser.email
        })
        .then(res => {
            addToast("Post added successfully", { appearance: "success" });
        });
        setLoading(false);
        setTitle("");
    };

    return (
        <Stack component="form" onSubmit={ handleAddPost } spacing={ 2 }>
            <TextField
                value={ title }
                onChange={ e => setTitle(e.target.value) }
                multiline
                rows={ 4 }
            />
            <Button type="submit" disabled={ loading } variant="contained">Create post</Button>
        </Stack>
    );
};

export default AddPost;