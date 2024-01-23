import DirectionsOffIcon from '@mui/icons-material/DirectionsOff';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <main
            style={{display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100vw', height:'100vh'}}
        >
            <DirectionsOffIcon
                sx={{
                    width: '200px',
                    height:'200px'
                }}
            />
            <Typography
                variant='h1'
                mb={4}
            >
                ERROR 404
            </Typography>
            <Typography
                variant='h3'
                mb={4}
            >
                La página a la cual intentas acceder no existe.
            </Typography>
            <Link
                to={'/'}
            >
                <Button
                    size='large'
                    variant='outlined'
                >
                    Volver Atrás
                </Button>
            </Link>
        </main>
    );
};

export default Error404;