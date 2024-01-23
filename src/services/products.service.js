import { getProductsByIdRepository, getProductsRepository } from "../repository/products.repository";

export const getProducts = async () => {
    try {
        const res = await getProductsRepository();
        return res.data.result; 
    } catch (e) {
        throw e;
    };
};

export const getProductByID = async (id) => {
    try {
        const res = await getProductsByIdRepository(id);
        return res.data.result;
    } catch (e) {
        throw e;
    };
};