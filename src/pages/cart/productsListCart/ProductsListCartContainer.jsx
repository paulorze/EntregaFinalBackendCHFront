import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartAddProduct, cartDeleteProduct, getProductQuantity } from '../../../redux/cartSlice';
import useProductQuantity from '../../../utils/hooks/useProductQuantity';
import ProductsListCart from './ProductsListCart';
import SkeletonProductListCartWidgetContainer from './skeletonProductListCartWidget/SkeletonCartWidgetContainer';
import { getSubtotalPrice } from '../../../utils/utils';
import { getProductByID } from '../../../services/products.service';
import {openToast} from '../../../redux/handleToastSlice.js'
import { openToastError } from '../../../redux/handleToastErrorSlice.js';
import { addProductToCart, deleteProductFromCart } from '../../../services/carts.service.js';

const ProductsListCartContainer = ({product}) => {
    const [loading, setLoading] = useState(true);
    const [foundProduct, setFoundProduct] = useState({});
    const [subtotal, setSubtotal] = useState(0);

    const productQuantity = useSelector(state => getProductQuantity(state, product._id))
    const {cantidadRestar, cantidadProducto, cantidadAgregar} = useProductQuantity(productQuantity);
    const dispatcher = useDispatch();
    
    const handleAddProductToCart = async () => {
        await addProductToCart({pid: product._id, quantity: cantidadProducto});
        dispatcher(cartAddProduct({_id: product._id, quantity: cantidadProducto}));
        dispatcher(openToast());
    };
    
    const deleteProduct = async () => {
        await deleteProductFromCart(product._id);
        dispatcher(cartDeleteProduct(product._id));
        dispatcher(openToast());
    };

    useEffect(()=> {
        getProductByID(product._id)
            .then(data => {
                setFoundProduct(data);
                setSubtotal(getSubtotalPrice(product.quantity, data.price));
                setLoading(false);
            })
            .catch(e=>{
                dispatcher(openToastError());
                console.log(e);
            });
    },[product])

    return (
        loading
            ? <SkeletonProductListCartWidgetContainer/>
            : <ProductsListCart
                product={foundProduct}
                handleAddProductToCart = {handleAddProductToCart}
                deleteProduct={deleteProduct}
                subtotal = {subtotal}
                cantidadRestar = {cantidadRestar}
                cantidadProducto = {cantidadProducto}
                cantidadAgregar = {cantidadAgregar}
            />
    );
};

export default ProductsListCartContainer;