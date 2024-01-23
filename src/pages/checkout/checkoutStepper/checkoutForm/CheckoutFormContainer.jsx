import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { CheckoutContext } from '../../../../context/CheckoutContext';
import { openToastError } from '../../../../redux/handleToastErrorSlice';
import { createPaymentIntentStripe } from '../../../../services/payments.service';
import CheckoutForm from "./CheckoutForm";

const CheckoutFormContainer = ({handleNextStep}) => {
    const dispatcher = useDispatch();
    // ESTAS SON DATOS NECESARIOS PARA EL RENDER DE LA PAGINA
    const [loading, setLoading] = useState(false);
    const cart = useSelector(store=>store.cart);
    // ESTO ES PARA NO CARGAR SI NO HAY PRODUCTOS EN EL CARRITO
    const hideStep = Object.keys(cart).length === 0;

    const {setClientSecret} = useContext(CheckoutContext);

    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            name: "",
            mail: "",
            address: "",
            postalCode: ""
        },
        onSubmit: async (data) => {
            try {
                setLoading(true);
                const products = cart;
                const res = await createPaymentIntentStripe({products, userData: data});
                setClientSecret(res.client_secret);
                setLoading(false);
                handleNextStep();
            } catch (e) {
                setLoading(false);
                dispatcher(openToastError());
                console.log(e);
            };
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Este campo es obligatorio").min(5,"Su nombre debe contener al menos 5 caracteres").max(30, "Su nombre no puede contener mas de 30 caracteres").matches(/^[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ ]*$/, "Por favor, ingrese solo caracteres válidos (alfanuméricos)."),
            mail: Yup.string().required("Este campo es obligatorio").email("Por favor, ingrese un mail válido").matches(/^[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ -_@\/,.:()]*$/, "Por favor, ingrese solo caracteres válidos."),
            address: Yup.string().required("Este campo es obligatorio").min(5,"Su nombre debe contener al menos 5 caracteres").max(30, "Su nombre no puede contener mas de 30 caracteres").matches(/^[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ ]*$/, "Por favor, ingrese solo caracteres válidos (alfanuméricos)."),
            postalCode: Yup.string().required("Este campo es obligatorio").matches(/^[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ ]*$/, "Por favor, ingrese solo caracteres válidos (alfanuméricos).")
        }),
        validateOnChange: false
    });

    return (
        <CheckoutForm
            hideStep={hideStep}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            errors={errors}
            loading={loading}
        />
    );
};

export default CheckoutFormContainer;