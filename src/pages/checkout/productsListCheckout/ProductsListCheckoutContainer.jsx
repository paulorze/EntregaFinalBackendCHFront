import { useEffect, useState } from 'react';
import { getSubtotalPrice } from '../../../utils/utils';
import SkeletonProductListCheckoutContainer from '../skeletonProductListCheckout/SkeletonProductListCheckoutContainer';
import ProductsListCheckout from './ProductsListCheckout';
import { getProductByID } from '../../../services/products.service';
import { useDispatch } from 'react-redux';
import { openToastError } from '../../../redux/handleToastErrorSlice';

const ProductsListCheckoutContainer = ({product}) => {
    const dispatcher = useDispatch();
    const [loading, setLoading] = useState(true);
    const [foundProduct, setFoundProduct] = useState({});
    const [subtotal, setSubtotal] = useState(0);

    useEffect(()=> {
        getProductByID(product._id)
            .then(data => {
                setFoundProduct(data);
                setSubtotal(getSubtotalPrice(product.quantity, data.price))
                setLoading(false);
            })
            .catch(e=>{
                dispatcher(openToastError())
                console.log(e)});
    },[]);

    return (
        loading
            ? <SkeletonProductListCheckoutContainer/>
            :<ProductsListCheckout
                name={foundProduct.name}
                quantity = {product.quantity}
                subtotal = {subtotal}
            />
    );
};

export default ProductsListCheckoutContainer;