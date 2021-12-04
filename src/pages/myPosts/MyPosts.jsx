import { Box, Stack } from "@mui/material";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../utils/firebaseConfig";

//Посты авторизированного юзера
const MyPosts = () => {

    const { currentUser } = useAuth();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)

        const q = query(collection(db, "posts"), where("userId", "==", currentUser.uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const postsFromDb = [];
            querySnapshot.forEach((doc) => {
                postsFromDb.push({ ...doc.data(), id: doc.id });
            });
            setPosts(postsFromDb);
            setLoading(false)
        });
        return () => unsubscribe();
    }, [currentUser.uid]);

    if(loading){
        return <Box>Loading...</Box>
    }
    return (
        <Stack direction="column" spacing={ 3 } alignItems="center">
            {posts && posts.map(post => <Post key={post.id} {...post}/>)}
        </Stack>
    );
};

export default MyPosts;