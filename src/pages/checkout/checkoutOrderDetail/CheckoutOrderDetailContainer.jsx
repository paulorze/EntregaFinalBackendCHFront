import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutContext } from '../../../context/CheckoutContext';
import { openToastError } from '../../../redux/handleToastErrorSlice';
import { getProductsTotalPrice } from '../../../utils/utils';
import CheckoutOrderDetail from './CheckoutOrderDetail';

const CheckoutOrderDetailContainer = () => {
    const {totalProducts, setTotalProducts, orderTotal} = useContext(CheckoutContext)
    const cart = useSelector(store=>store.cart);
    const [loading, setLoading] = useState(true);
    const dispatcher = useDispatch();

    useEffect(()=> {
        getProductsTotalPrice(cart)
            .then(data=> {
                setTotalProducts(data);
                setLoading(false);
            })
            .catch(e=>{
                dispatcher(openToastError());
                console.log(e)
            });
    },[]);

    return (
        <CheckoutOrderDetail
            cart={cart}
            loading={loading}
            totalProducts={totalProducts}
            orderTotal={orderTotal}
        />
    );
};

export default CheckoutOrderDetailContainer;