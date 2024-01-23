import axios from 'axios';

const url = import.meta.env.VITE_BACKEND_URL;

export const getProductsRepository = async () => {
    try {
        const res = await axios.get(`${url}/api/products`);
        return res;
    } catch (e) {
        throw e;
    };
};

export const getProductsByIdRepository = async (id) => {
    try {
        const res = await axios.get(`${url}/api/products/${id}`);
        return res;
    } catch (e) {
        throw e;
    };
};