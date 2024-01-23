import { createContext, useEffect, useState } from "react";

export const CheckoutContext = createContext();

const CheckoutContextComponent = ({children}) => {

    const [orderID, setOrderID] = useState(null);
    const handleSetOrderID = (id) =>{
        setOrderID(id);
    };

    const [totalProducts, setTotalProducts] = useState(0);
    const [orderTotal, setOrderTotal] = useState(0);

    const getOrderTotal = () => {
        const total = totalProducts;
        setOrderTotal(total);
    };

    useEffect(()=>{
        getOrderTotal();
    }, [totalProducts]);

    const [clientSecret, setClientSecret] = useState("");

    const data = {
        orderID,
        handleSetOrderID,
        totalProducts,
        setTotalProducts,
        orderTotal,
        clientSecret,
        setClientSecret
    };

    return (
        <CheckoutContext.Provider
            value={data}
        >
            {children}
        </CheckoutContext.Provider>
    );
};

export default CheckoutContextComponent;