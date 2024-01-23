import { useTheme } from "@mui/material";
import { useState } from 'react';
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { openToastError } from "../../redux/handleToastErrorSlice";
import { logOut } from "../../services/authentication.service";
import { resetUser } from "../../redux/userSlice";
import { cartClean } from "../../redux/cartSlice";

const NavbarContainer = ()=> {
    const theme = useTheme();

    // ESTO CORRESPONDE AL USUARIO AUTENTICADO
    const userData = useSelector(store=>store.userData)
    const adminKey = import.meta.env.VITE_ADMIN_KEY;
    const dispatcher = useDispatch();

    // ESTO CORRESPONDE ALMENU RESPONSIVODESPLEGABLE
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // ESTO CORRESPONDE AL MENU DE PERFIL
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogOut = async () => {
        try {
            await logOut();
            dispatcher(resetUser());
            dispatcher(cartClean());
        } catch (e) {
            console.log(e)
            dispatcher(openToastError());
        }
    } 
    
    return  (
        <Navbar
            anchorElNav = {anchorElNav}
            handleOpenNavMenu = {handleOpenNavMenu}
            handleCloseNavMenu = {handleCloseNavMenu}
            anchorElUser = {anchorElUser}
            handleOpenUserMenu = {handleOpenUserMenu}
            handleCloseUserMenu = {handleCloseUserMenu}
            theme = {theme}
            role={userData?.role}
            adminKey={adminKey}
            handleLogOut={handleLogOut}
        />
    );
};

export default NavbarContainer;