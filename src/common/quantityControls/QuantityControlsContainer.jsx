import { IconButton, Typography } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const QuantityControlsContainer = ({cantidadRestar, cantidadProducto, cantidadAgregar, product}) => {
    return (
        <>
            <IconButton
                variant='contained'
                color='success'
                size='large'
                onClick={()=>{cantidadRestar()}}
                disabled = {cantidadProducto <= 1}
            >
                <RemoveCircleIcon
                    fontSize='inherit'
                    sx={{
                        width: '40px',
                        height: '40px'
                    }}
                />
            </IconButton>
            <Typography
                variant='h5'
                fontWeight={'bold'}
            >
                {cantidadProducto}
            </Typography>
            <IconButton
                variant='contained'
                color='success'
                size='large'
                onClick={()=>{cantidadAgregar()}}
                disabled = {cantidadProducto >= product['stock']} 
            >
                <AddCircleIcon
                    fontSize='inherit'
                    sx={{
                        width: '40px',
                        height: '40px'
                    }}
                />
            </IconButton>
        </>
    )
}

export default QuantityControlsContainer