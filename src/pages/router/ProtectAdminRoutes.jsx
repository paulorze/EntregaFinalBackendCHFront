import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const ProtectAdminRoutes = () => {
    const userData = useSelector(store=>store.userData);
    const adminKey = import.meta.env.VITE_ADMIN_KEY;

    return (
        (userData?.role === adminKey)
            ? <Outlet/>
            : <Navigate to={'/'}/>
    );
};

export default ProtectAdminRoutes;