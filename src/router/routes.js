import AddPost from "../pages/addPost/AddPost";
import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";
import MyPosts from "../pages/myPosts/MyPosts";
import PostView from "../pages/postView/PostView";
import Profile from "../pages/profile/Profile";

//Все роуты приложения
export const routes = [
    {
        element: Home,
        private: false
    },
    {
        element: Profile,
        path: "profile",
        private: true
    },
    {
        element: Auth,
        path: "login",
        private: false,
        onlyPublic: true
    },
    {
        element: Auth,
        path: "register",
        private: false,
        onlyPublic: true
    },
    {
        element: AddPost,
        path: "add-post",
        private: true
    },
    {
        element: PostView,
        path: "post/:id",
        private: false
    },
    {
        element: MyPosts,
        path: "my-posts",
        private: true
    }
];