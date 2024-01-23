import { createPaymentIntentStripeRepository } from "../repository/payments.repository";

export const createPaymentIntentStripe = async ({products, userData}) => {
    try {
        let res = await createPaymentIntentStripeRepository({products, userData})
        return res.data.result;
    } catch (e) {
        throw e;
    };
};