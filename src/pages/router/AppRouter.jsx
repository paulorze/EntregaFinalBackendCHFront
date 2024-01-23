import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "../../layout/Layout";
import { resetUser, setUser } from "../../redux/userSlice";
// import { getUser } from "../../services/users.service";
import { themeDark } from "../../utils/themeDark";
import Error404Container from "../error404/Error404Container";
import { routes } from "./menuRoutes";
import { protectedRoutes } from "./protectedUserRoutes";
import ProtectUserRoutes from "./ProtectUserRoutes";
import { DashboardContainer } from "../dashboard/DashboardContainer";
import ProtectAdminRoutes from "./ProtectAdminRoutes";

const AppRouter = () => {
    // const [user] = useAuthState(auth);
    // const dispatcher = useDispatch();
    // useEffect(()=> {
    //     if (!user) {
    //         dispatcher(resetUser());
    //     } else {
    //         getUser(user.uid)
    //             .then(data => {
    //                 dispatcher(setUser({email: user.email, img : user.photoURL, uid: user.uid, role: data.role, data: data.data}));
    //             })
    //             .catch(e=> console.log(e));
    //     };
    // }, [user]);

    return (
        <ThemeProvider
            theme={themeDark}
        >
            <Routes>
                <Route element={<Layout/>}>
                    {(routes).map(({key, path, Element})=>(
                        <Route
                            key={key}
                            path={path}
                            element={<Element />}
                        />
                    ))}
                    <Route element={<ProtectUserRoutes/>} >
                        {(protectedRoutes).map(({key, path, Element})=>(
                            <Route
                                key={key}
                                path={path}
                                element={<Element />}
                            />
                        ))}
                    </Route>            
                    <Route element={<ProtectAdminRoutes/>} >
                        <Route path="/dashboard" element={<DashboardContainer/>} />
                    </Route>
                </Route>
                <Route path='/*' element={<Error404Container/>} />
            </Routes>
        </ThemeProvider>
    );
};

export default AppRouter;