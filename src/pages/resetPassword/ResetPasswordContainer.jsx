import { useTheme } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { openToastError } from '../../redux/handleToastErrorSlice';
import { resetPassword } from '../../services/authentication.service';
import ResetPassword from './ResetPassword';

const ResetPasswordContainer = () => {
    const dispatcher = useDispatch();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = ()=> {
        setOpen(true);
    };
    const handleClose = ()=> {
        setOpen(false);
    };
    const navigate = useNavigate();

    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            email: ""
        },
        onSubmit: async (data) => {
            try {
                const res = await resetPassword({email: data.email});
                handleOpen();
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } catch (e) {
                dispatcher(openToastError());
                console.log(e);
            };
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Por favor, inserte una direccion de correo válida.").required("Este campo es obligatorio.")
        }),
        validateOnChange: false
    });

    return (
        <ResetPassword
            theme={theme}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            errors = {errors}
            open={open}
            handleClose={handleClose}
        />
    );
};

export default ResetPasswordContainer;