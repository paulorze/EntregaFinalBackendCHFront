import { getProductByID } from "../services/products.service";


export const getSubtotalPrice = (quantity, price) => {
    let subtotal = price * quantity;
    return subtotal;
};

export const getProductsTotalPrice = async (cart, deleteProduct) => {
    let totalPrice = 0;
    for (const product in cart) {
        const foundProduct = await getProductByID(product);
        if (!foundProduct) {
            deleteProduct(product)
        }
        if (!cart[product]?.quantity || cart[product]?.quantity > foundProduct.stock) {
            deleteProduct(product)
        }
        const subtotal = getSubtotalPrice(cart[product].quantity, foundProduct.price);
        totalPrice+= subtotal;
    };
    return totalPrice;
};

export const getProductsData = async (cart) => {
    let products = [];
    for (const product in cart) {
        const foundProduct = await getProductByID(product);
        products.push({
            title: foundProduct.name,
            id: product, 
            code: foundProduct.code, 
            unit_price: foundProduct.price, 
            quantity: cart[product].quantity});
    };
    return products;
};

export const endCheckout = async (order) => {
    try {
        localStorage.removeItem('orderData');
        return res;
    } catch (e) {
        throw e;
    };
};