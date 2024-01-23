import { useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { cartAddProduct, getProductQuantity } from '../../redux/cartSlice';
import { openToast } from '../../redux/handleToastSlice';
import useProductQuantity from '../../utils/hooks/useProductQuantity';
import CardProduct from './CardProduct';
import { addProductToCart } from '../../services/carts.service';

const CardProductContainer = ({product}) => {
    const theme = useTheme();
    const productQuantity = useSelector(state=> getProductQuantity(state, product._id));
    const dispatcher = useDispatch();
    const handleAddProductToCart = async () => {
        await addProductToCart({pid: product._id, quantity: cantidadProducto});
        dispatcher(cartAddProduct({_id: product._id, quantity: cantidadProducto}))
        dispatcher(openToast());
    };

    const {cantidadProducto, cantidadAgregar, cantidadRestar} = useProductQuantity(productQuantity);


    return (
        <CardProduct
            product = {product}
            theme = {theme}
            handleAddProductToCart = {handleAddProductToCart}
            cantidadProducto = {cantidadProducto}
            cantidadAgregar = {cantidadAgregar}
            cantidadRestar = {cantidadRestar}
        />
    );
};

export default CardProductContainer;