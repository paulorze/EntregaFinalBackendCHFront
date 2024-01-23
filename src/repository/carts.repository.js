import axios from 'axios';
const url = import.meta.env.VITE_BACKEND_URL;

export const getCartRepository = async () => {
    try {
        const response = await fetch(`${url}/api/carts`, {
            credentials: 'include',  // Include cookies for cross-origin requests
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
          }
      
          const data = await response.json();  // Assuming a JSON response
          return data;
        // const res = await axios.get(
        //     `${url}/api/carts`, 
        //     {
        //         withCredentials: true
        //     }
        // );
        // return res;
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
                withCredentials: true
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