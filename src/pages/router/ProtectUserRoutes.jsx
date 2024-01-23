import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectUserRoutes = () => {
    const userData = useSelector(store=>store.userData);

    return (
        (userData?.role !== undefined)
            ? <Outlet/>
            : <Navigate to={'/'}/>
    );
};

export default ProtectUserRoutes;