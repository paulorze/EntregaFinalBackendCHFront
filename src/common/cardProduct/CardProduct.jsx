import { Button, Typography } from '@mui/material';
import QuantityControlsContainer from '../quantityControls/QuantityControlsContainer';
import './CardProduct.css';

const CardProduct = ({product, theme, handleAddProductToCart, cantidadProducto, cantidadAgregar, cantidadRestar}) => {
    return (
        <div 
            className='card'
            style={{
                border: `1px solid ${theme.palette.font.dark}`,
                backgroundColor : theme.palette.secondary.light,
                color: theme.palette.font.main
        }}>
            <div className="card__top">
                <img src={product['thumbnail'][0]} alt="Imagen del producto" />
            </div>
            <div className="card__bottom">
                <div className='card__bottom__text'>
                    <Typography
                        variant='h2'
                        sx={{mb: 1}}
                    >
                        {product['title']}
                    </Typography>
                    <Typography
                        variant='h3'
                        fontWeight={'bold'}
                    >
                        $ {product['price']}
                    </Typography>
                </div>
                <div className="card__bottom__cantidadProducto">
                    <QuantityControlsContainer
                        cantidadRestar={cantidadRestar}
                        cantidadProducto={cantidadProducto}
                        cantidadAgregar={cantidadAgregar}
                        product={product}
                    />
                </div>
                <Button
                    variant='contained'
                    color='success'
                    sx={{position:'absolute', bottom:'15px', left:'50%', transform:"TranslateX(-50%)", width:'210px'}}
                    size='medium'
                    onClick={handleAddProductToCart}
                >
                    Agregar al Carrito
                </Button>
            </div>
        </div>
    );
};

export default CardProduct;