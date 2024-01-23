import LoginContainer from "../login/LoginContainer";
import RegisterContainer from "../register/RegisterContainer";
import ResetPasswordContainer from "../resetPassword/ResetPasswordContainer";

export const routes = [
    {
        key: 'Login',
        path: '/',
        Element: LoginContainer
    },
    {
        key: 'Register',
        path: '/register',
        Element: RegisterContainer
    },
    {
        key: 'Reset Password',
        path: '/resetPassword',
        Element: ResetPasswordContainer
    }
];