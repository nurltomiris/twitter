import React from "react";
import { useAuth } from "../../contexts/AuthContext";

//Компонент профиля
const Profile = () => {

    const {currentUser} = useAuth()

    return (
        <div>
            {currentUser && currentUser.email}
        </div>
    );
};

export default Profile;