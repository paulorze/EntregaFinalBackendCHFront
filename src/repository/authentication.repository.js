import axios from 'axios';
const url = import.meta.env.VITE_BACKEND_URL;

export const signInRepository = async (data) => {
    try {
        const res = await axios.post(
            `${url}/api/users/login`,
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

export const logOutRepository = async () => {
    try {
        const res = await axios.get(
            `${url}/api/users/logout`, 
            {
                withCredentials: true,
            }
        );
        return res;
    } catch (e) {
        throw e;
    };
};

export const resetPasswordRepository = async (data) => {
    try {
        const res = await axios.post(
            `${url}/api/users/passwordReset`,
            data
        );
        return res;
    } catch (e) {
        throw e;
    };
}