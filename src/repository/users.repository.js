import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;

export const uploadDocumentsUserRepository = async (id, data) => {
    try {
        const res = await axios.post(
            `${url}/api/users/${id}/documents`, 
            data,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
        return res;
    } catch (e) {
        throw e;
    };
};

export const getAllUsersRepository = async () => {
    try {
        const res = axios.get(
            `${url}/api/users/getAll`, 
            {
                withCredentials: true,
            }
        );
        return res;
    } catch (e) {
        throw e;
    };
};

export const recategorizeUserRepository = async (id) => {
    try {
        const res = axios.post(
            `${url}/api/users/premium/${id}`,
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

export const deleteUserRepository = async (id) => {
    try {
        const res = axios.delete(
            `${url}/api/users/${id}`, 
            {
                withCredentials: true,
            }
        );
        return res;
    } catch (e) {
        throw e;
    };
};

export const createUserRepository = async (data) => {
    try {
        const res = await axios.post(
            `${url}/api/users/register`, 
            data,
            {
                withCredentials: true
            });
        return res;
    } catch (e) {
        throw e;
    };
}