import { logOutRepository, resetPasswordRepository, signInRepository } from "../repository/authentication.repository";

export const signIn = async ({email, password}) => {
    try {
    const res = await signInRepository({email, password});
    return res.data.accessToken;
    } catch (e) {
        throw e;
    };
};

export const logOut = async () => {
    try {
        const res = await logOutRepository();
        return res;
    } catch (e) {
        throw e;
    }
};

export const resetPassword = async (data) => {
    try {
        const res = await resetPasswordRepository(data);
        return res;
    } catch (e) {
        throw e;
    };
};