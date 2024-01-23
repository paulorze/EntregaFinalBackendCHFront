import axios from 'axios';
const url = import.meta.env.VITE_BACKEND_URL;

export const getCartRepository = async () => {
    try {
        const res = await axios.get(
            `${url}/api/carts`, 
            {
                withCredentials: true,
            }
        );
        return res;
    } catch (e) {
        throw e;
    };
};

export const addProductToCartRepository = async (data) => {
    try {
        const res = await axios.put(
            `${url}/api/carts/addProduct`, 
            data,
            {
                withCredentials: true,
            }
        );
        return res;
    } catch (e) {
        throw e;
    };
};

export const deleteProductFromCartRepository = async (pid) => {
    try {
        const res = await axios.delete(
            `${url}/api/carts/deleteProduct?pid=${pid}`, 
            {
                withCredentials: true,
            }
        );
        return res;
    } catch (e) {
        throw e;
    };
};

export const cleanCartRepository = async () =>{
    try {
        const res = await axios.delete(
            `${url}/api/carts`, 
            {
                withCredentials: true,
            }
        );
        return res;
    } catch (e) {
        throw e;
    };
};

export const endPurchaseRepository = async () =>{
    try {
        const res = await axios.post(
            `${url}/api/carts/purchase`,
            null,
            {
                withCredentials: true,
            }
        );
        return res;
    } catch (e) {
        throw e;
    };
};