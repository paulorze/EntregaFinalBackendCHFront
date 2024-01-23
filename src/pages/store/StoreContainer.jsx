import { useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { openToastError } from '../../redux/handleToastErrorSlice';
import { getProducts } from '../../services/products.service';
import Store from './Store';

const StoreContainer = () => {
    const theme = useTheme();
    const dispatcher = useDispatch();
    const [loading, setLoading] = useState(true);
    const [productsList, setProductsList] = useState([]);

    useEffect(()=> {
        setLoading(true);
        getProducts()
            .then(products => {
                setProductsList(products);
                setLoading(false)
            })
            .catch(e => {
                dispatcher(openToastError());
                console.log(e);
            });
    },[]);

    return (
        <Store
            theme={theme}
            productsList={productsList}
            loading={loading}
        />
    );
};

export default StoreContainer;