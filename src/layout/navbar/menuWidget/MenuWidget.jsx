import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const MenuWidget = ({handleOpen}) => {
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="abrir menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpen}
            sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>
    );
};

export default MenuWidget;