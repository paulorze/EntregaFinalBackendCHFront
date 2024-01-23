import { Outlet } from "react-router-dom";
import NavbarContainer from "./navbar/NavbarContainer";
import FooterContainer from "./footer/FooterContainer";
import ToastErrorContainer from "../common/toastError/ToastErrorContainer";

const Layout = () => {
    return (
        <>
            <NavbarContainer/>
            <Outlet/>
            <FooterContainer/>
            <ToastErrorContainer/>
        </>
    );
};

export default Layout;