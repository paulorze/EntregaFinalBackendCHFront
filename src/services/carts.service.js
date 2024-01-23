import { addProductToCartRepository, cleanCartRepository, deleteProductFromCartRepository, endPurchaseRepository, getCartRepository } from "../repository/carts.repository";

export const getCart = async () => {
    try {
        const res = await getCartRepository();
        return res.data.result;
    } catch (e) {
        throw e;
    };
};

export const addProductToCart = async (data) => {
    try {
        const res = await addProductToCartRepository(data);
        return res.data;
    } catch (e) {
        throw e;
    };
};

export const deleteProductFromCart = async (id) => {
    try {
        const res = await deleteProductFromCartRepository(id);
        return res.data;
    } catch (e) {
        throw e;
    };
};

export const cleanCartService = async () => {
    try {
        const res = await cleanCartRepository();
        return res.data;
    } catch (e) {
        throw e;
    };
};

export const endPurchase = async () => {
    try {
        const res = await endPurchaseRepository();
        return res.data;
    } catch (e) {
        throw e;
    };
};