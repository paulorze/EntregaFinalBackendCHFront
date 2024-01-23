import { useTheme } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { openToastError } from '../../redux/handleToastErrorSlice';
import { openToast } from '../../redux/handleToastSlice';
import { createUser } from '../../services/users.service';
import Register from './Register';

const RegisterContainer = () => {
    const theme = useTheme();
    const dispatcher = useDispatch();
    const [showPass, setShowPass] = useState(false);
    const [showPassConfirm, setShowPassConfirm] = useState(false);
    const [invalidData, setInvalidData] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getCharacterValidationError = (str) => {
        return `Tu contraseña debe contener al menos 1 ${str}.`;
    };
    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            email: "",
            password: "",
            username: "",
            first_name: "",
            last_name: ""
        },
        onSubmit: async (data) => {
            setLoading(true)
            try {
                await createUser(data);
                dispatcher(openToast());
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } catch (e) {
                setLoading(false)
                setInvalidData("Ha ocurrido un error al crear el usuario. Intente nuevamente en unos minutos.")
                dispatcher(openToastError());
                console.log(e);
            };
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Por favor, inserte una direccion de correo válida.").required("Este campo es obligatorio."),
            password: Yup.string().required("Este campo es obligatorio.").min(8, "La contraseña debe contener al menos 8 caracteres.").matches(/[0-9]/, getCharacterValidationError("dígito")).matches(/[a-z]/, getCharacterValidationError("minúscula")).matches(/[A-Z]/, getCharacterValidationError("mayúscula")),
            passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], "Las contraseñas no coinciden."),
            username: Yup.string().required("Este campo es obligatorio."),
            first_name: Yup.string().required("Este campo es obligatorio."),
            last_name: Yup.string().required("Este campo es obligatorio."),
        }),
        validateOnChange: false
    });

    return (
        <Register
            theme={theme}
            showPass={showPass}
            setShowPass={setShowPass}
            showPassConfirm={showPassConfirm}
            setShowPassConfirm={setShowPassConfirm}
            invalidData={invalidData}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            errors={errors}
            loading={loading}
        />
    );
};

export default RegisterContainer;