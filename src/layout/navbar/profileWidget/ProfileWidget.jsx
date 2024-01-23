import AccountCircle from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const ProfileWidget = ({handleOpen, tag, theme, img}) => {
    return (
        <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        onClick={handleOpen}
        sx={{
            color: tag ? theme.palette.font.main : theme.palette.font.light
        }}
        >   
            {
                (img !== undefined && img !== null)
                    ? <img 
                        src={img} 
                        alt='Imagen de Perfil'
                        style={{
                            borderRadius: '50%',
                            overflow: 'hidden',
                            width: '24px',
                            height: '24px'
                        }}
                    />
                    : <AccountCircle />
            }
            {tag && <Typography textAlign="center" sx={{marginLeft:2}}> Mi Perfil </Typography>}
        </IconButton>
    );
};

export default ProfileWidget;