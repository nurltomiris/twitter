import { Box, Button } from "@mui/material";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Post from "../../components/Post";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../utils/firebaseConfig";

//Компонент страницы с отдельным постом
const PostView = () => {
    let { id } = useParams();

    const [post, setPost] = useState();
    const [loading, setLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const { currentUser } = useAuth();
    const { addToast } = useToasts();
    const navigate = useNavigate();
    const [isEdit, setIsEdit] = useState(false);
    const [updateLoading, setUpdateLoading] = useState(false);

    const getDocument = useCallback(
        async() => {
            const docRef = doc(db, "posts", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setPost({ ...docSnap.data(), id: docSnap.id });
            } else {
                setPost(null);
            }
            setLoading(false);
        },
        [id]
    );

    useEffect(() => {
        setLoading(true);
        getDocument();
    }, [getDocument]);

    const deletePost = () => {
        setDeleteLoading(true);
        deleteDoc(doc(db, "posts", post.id))
        .then(() => {
            addToast("Пост успешно удален", { appearance: "success" });
            navigate("/my-posts");
        })
        .catch(e => {
            addToast(e.message, { appearance: "error" });
        })
        .finally(() => {
            setDeleteLoading(false);
        });
    };

    const updatePost = (newTitle) => {
        setUpdateLoading(true);
        updateDoc(doc(db, "posts", post.id), { title: newTitle })
        .then((result) => {
            setLoading(true);
            getDocument();
            addToast("Пост успешно обновлен", { appearance: "success" });
        })
        .catch(e => {
            addToast(e.message, { appearance: "error" });
        })
        .finally(() => {
            setUpdateLoading(false);
            setIsEdit(false);
        });
    };

    if (loading) {
        return <Box>Loading...</Box>;
    }

    return (
        <Box
            sx={ {
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            } }
        >
            {
                !post
                    ?
                    <Box>Ошибка</Box>
                    :
                    <Box>
                        {
                            currentUser?.uid === post.userId &&
                            <Box
                                sx={ {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    mb: 2
                                } }
                            >
                                <Button
                                    disabled={ deleteLoading }
                                    onClick={ deletePost }
                                    variant="contained"
                                    sx={{
                                        ml: 2
                                    }}
                                >
                                    Delete
                                </Button>
                                <Button
                                    variant="contained"
                                    disabled={ updateLoading }
                                    onClick={ () => setIsEdit(prev => !prev) }
                                >
                                    Edit
                                </Button>
                            </Box>
                        }
                        <Post isEdit={ isEdit } setIsEdit={ setIsEdit } updatePost={ updatePost } { ...post }/>
                    </Box>
            }
        </Box>
    );
};

export default PostView;