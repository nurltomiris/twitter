import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../layout/Layout";
import NotFound from "../pages/notFound/NotFound";
import { routes } from "./routes";

//Компонент управляет роутами
const AppRouter = () => {

    const { currentUser } = useAuth();

    return (
        <Routes>
            <Route path="/" element={ <Layout/> }>
                {
                    routes.map((route, index) => {
                        let element;

                        //Если роут приватный
                        if (route.private) {
                            //Если пользовтель авторизован, то прокидываем роут
                            if (currentUser) {
                                element = <route.element/>;
                            } else {
                                //иначе на начальную страницу
                                element = <Navigate to="/"/>;
                            }
                        } else {
                            //если роут не приватный, то пропускаем юзера
                            element = <route.element/>;
                        }

                        if (route.onlyPublic) {
                            if (currentUser) {
                                element = <Navigate to="/"/>;
                            } else {
                                element = <route.element/>;
                            }
                        }

                        return <Route
                            key={ index }
                            index={ !route.path }
                            element={ element }
                            path={ route.path }
                        />;
                    })
                }
                <Route path="*" element={ <NotFound/> }/>
            </Route>
        </Routes>
    );
};

export default AppRouter;