import { useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartClean, cartDeleteProduct } from '../../redux/cartSlice';
import Cart from './Cart';
import { getProductsTotalPrice } from '../../utils/utils';
import { openToastError } from '../../redux/handleToastErrorSlice';
import { cleanCartService } from '../../services/carts.service';

const CartContainer = () => {
    const theme = useTheme();
    const cart = useSelector(store=>store.cart);
    const dispatcher = useDispatch();
    const cleanCart = () => {
        dispatcher(cartClean());
    };
    const deleteProduct = (id) => {
        dispatcher(cartDeleteProduct(id));
    };

    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(null);
    useEffect(()=> {
        getProductsTotalPrice(cart, deleteProduct)
            .then(data => {
                setTotal(data);
                setLoading(false);
            })
            .catch(e=>{
                dispatcher(openToastError());
                console.log(e);
            })
    },[cart]);


    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleConfirm = async () => {
        await cleanCartService();
        cleanCart();
        setOpen(false);
    };

    return (
        <Cart
            theme = {theme}
            cart={cart}
            total= {total}
            open={open}
            handleOpen = {handleOpen}
            handleClose={handleClose}
            handleConfirm={handleConfirm}
            loading={loading}
        />
    );
};

export default CartContainer;