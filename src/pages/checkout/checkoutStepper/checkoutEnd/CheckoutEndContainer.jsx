import React, { useContext } from 'react'
import CheckoutEnd from './CheckoutEnd';
import { CheckoutContext } from '../../../../context/CheckoutContext';

const CheckoutEndContainer = () => {
    const {orderID} = useContext(CheckoutContext);

    return (
        <CheckoutEnd
            orderID={orderID}
        />
    );
};

export default CheckoutEndContainer;