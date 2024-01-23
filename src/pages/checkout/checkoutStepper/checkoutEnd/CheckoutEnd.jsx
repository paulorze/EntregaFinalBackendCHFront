import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CheckoutEnd = ({orderID}) => {
    return (
        <Box
            width={'100%'}
            marginTop={4}
        >
            <Typography
                variant='h4'
                component={'h2'}
                textAlign={'center'}
            >
                ¡Muchas gracias por tu compra!
            </Typography>
            <Typography
                variant='h6'
                component={'p'}
                margin={2}
            >
                El ID de tu compra es {orderID}. Si iniciaste sesión antes de hacer la compra, podrás revisar el estado de la misma en tu perfil. De todos modos, te iremos enviando correos a medida que la vayamos procesando ^-^
            </Typography>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-around'}
            >
                <Link
                    to={'/profile'}
                >
                    <Button
                        color={'secondary'}
                        variant='outlined'
                    >
                        Volver a Mi Perfil
                    </Button>
                </Link>
                <Link
                    to={'/store'}
                >
                    <Button
                        color={'secondary'}
                        variant='outlined'
                    >
                        Volver a la Tienda
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default CheckoutEnd;