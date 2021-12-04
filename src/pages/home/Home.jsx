import { Box, Stack, Typography } from "@mui/material";
import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import { db } from "../../utils/firebaseConfig";

//Главная страница со всеми постами
const Home = () => {

    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const q = query(collection(db, "posts"));
        const unsub = onSnapshot(q, querySnapshot => {
            const postsFromDb = [];
            querySnapshot.forEach(doc => {
                postsFromDb.push({ ...doc.data(), id: doc.id });
            });
            setPosts(postsFromDb);
            setLoading(false);
        });
        return () => unsub();
    }, []);

    return (
        <Stack direction="column" spacing={ 3 } alignItems="center">
            <Typography variant="h4">Все посты</Typography>
            {
                loading && <Box>Loading...</Box>
            }
            {
                posts && posts.map(post => <Post key={ post.id } { ...post }/>)
            }
        </Stack>
    );
};

export default Home;