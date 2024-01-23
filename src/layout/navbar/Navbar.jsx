import AdbIcon from '@mui/icons-material/Adb';
import { Button, Drawer } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CartWidgetContainer from './cartWidget/CartWidgetContainer';
import MenuWidgetContainer from './menuWidget/MenuWidgetContainer';
import ProfileWidgetContainer from './profileWidget/ProfileWidgetContainer';

const Navbar = ({anchorElNav, handleOpenNavMenu, handleCloseNavMenu, anchorElUser, handleOpenUserMenu, handleCloseUserMenu, theme, role, adminKey, handleLogOut}) => {

    return (
        <AppBar position="sticky" maxwidth='xl' sx={{flexGrow: 1, backgroundColor: theme.palette.primary.main, color:theme.palette.font.light}}>
            <Toolbar>
                <Link
                    to={'/'}
                    >
                    <Box 
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'space-around', alignItems:'center'}}
                        color={theme.palette.font.light}
                    >
                        <AdbIcon sx={{ mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            FRONTEND
                        </Typography>
                    </Box>
                </Link>
                <Box 
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    <MenuWidgetContainer
                        handleOpen={handleOpenNavMenu}
                    />
                    <Drawer
                    id="menu-appbar"
                    anchorel={anchorElNav}
                    anchororigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformorigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link
                                to={'/store'}
                            >
                                <Typography textAlign="center">Tienda</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <ProfileWidgetContainer handleOpen={handleOpenUserMenu} tag={true}/>
                        </MenuItem>
                    </Drawer>
                </Box>
                <Box 
                    sx={{ 
                        flexGrow: 1, 
                        display: { xs: 'flex', md: 'none' }, 
                        justifyContent:'space-around', 
                        alignItems:'center'
                    }}
                >
                    <Link
                        to={'/'}
                        id='logoHeader'
                        >
                        <AdbIcon sx={{ mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                            mr: 2,
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            FRONTEND
                        </Typography>
                    </Link>
                </Box>
                <Box 
                    sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-around' }}
                >
                    <Link
                        to={'/store'}
                    >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: theme.palette.font.light, display: 'block' }}
                        >
                            Tienda
                        </Button>
                    </Link>
                </Box>
                <Box 
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    <CartWidgetContainer/>
                </Box>
                <Box 
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                >
                    <CartWidgetContainer/>
                    <ProfileWidgetContainer handleOpen={handleOpenUserMenu}/>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <Link
                            to={
                                (role !== undefined)
                                    ? '/profile'
                                    : '/'
                            }
                        >
                            <MenuItem onClick={()=>{
                                handleCloseUserMenu();
                                handleCloseNavMenu();
                            }}>
                                {
                                    (role !== undefined)
                                        ? <Typography textAlign="center">Mi Perfil</Typography>
                                        : <Typography textAlign="center">Iniciar Sesión</Typography>
                                }
                                
                            </MenuItem>
                        </Link>
                        {
                            (role === adminKey)
                                && <Link
                                    to={'/dashboard'}
                                >
                                    <MenuItem
                                        onClick={()=>{
                                            handleCloseUserMenu();
                                            handleCloseNavMenu();
                                        }}
                                    >
                                        Dashboard Admin
                                    </MenuItem>
                                </Link>
                        }
                        <MenuItem onClick={()=> {
                            handleLogOut(); 
                            handleCloseUserMenu(); 
                            handleCloseNavMenu();
                        }}>
                            <Typography textAlign="center">Cerrar Sesión</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;