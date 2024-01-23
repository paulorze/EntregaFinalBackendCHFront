import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;

export const createPaymentIntentStripeRepository = async (data) => {
    try {
        const res = await axios.post(
            `${url}/api/payments/stripe`, 
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
