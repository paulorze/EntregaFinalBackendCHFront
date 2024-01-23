import { useTheme } from '@mui/material';
import { useFormik } from 'formik';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { setUser } from '../../redux/userSlice';
import { signIn } from '../../services/authentication.service';
import Login from './Login';
import { getCart } from '../../services/carts.service';
import { cartAddProduct, cartClean } from '../../redux/cartSlice';

const LoginContainer = () => {
    const theme = useTheme();
    const dispatcher = useDispatch();
    const [showPass, setShowPass] = useState(false);
    const [invalidData, setInvalidData] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (data) => {
            setLoading(true)
            try {
                const res = await signIn(data);
                const decodedJwt = jwtDecode(res);
                dispatcher(setUser({_id: decodedJwt.user._id, username: decodedJwt.user.username, email: decodedJwt.user.email, role: decodedJwt.user.role, documents: decodedJwt.user?.documents ? decodedJwt.user.documents : [], jwt : res}));
                document.cookie = `session=${res}; expires=3600; samesite=None; secure; domain=entregafinalbackendchback-production.up.railway.app`;
                const cart = await getCart();
                dispatcher(cartClean());
                cart.products.forEach(product => {
                    dispatcher(cartAddProduct({_id: product.pid, quantity: product.quantity}));
                });
                setLoading(false);
                navigate('/store');
            } catch (e) {
                console.log(e)
                setLoading(false);
                setInvalidData('No pudiste iniciar sesion.');
            };
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Este campo es obligatorio"),
            password: Yup.string().required("Este campo es obligatorio"),
        }),
        validateOnChange: false
    });

    return (
        <Login
            theme = {theme}
            showPass = {showPass}
            setShowPass = {setShowPass}
            invalidData = {invalidData}
            handleSubmit = {handleSubmit}
            handleChange = {handleChange}
            errors = {errors}
            loading={loading}
        />
    );
};

export default LoginContainer;