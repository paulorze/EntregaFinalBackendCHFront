import { createUserRepository, deleteUserRepository, getAllUsersRepository, recategorizeUserRepository, uploadDocumentsUserRepository } from "../repository/users.repository";

export const uploadDocumentsUser = async (id, data) => {
    try {
        const res = await uploadDocumentsUserRepository(id, data);
        return res.data;
    } catch (e) {
        throw e;
    };
};

export const getAllUsers = async () => {
    try {
        const res = await getAllUsersRepository();
        return res.data.response;
    } catch (e) {
        throw e;
    };
};

export const recategorizeUser = async (id) => {
    try {
        const res = await recategorizeUserRepository(id);
        return res;
    } catch (e) {
        throw e;
    };
};

export const deleteUser = async (id) => {
    try {
        const res = await deleteUserRepository(id);
        return res;
    } catch (e) {
        throw e;
    };
};

export const createUser = async (data) => {
    try {
        const res = await createUserRepository(data);
        return res;
    } catch (e) {
        throw e;
    };
};