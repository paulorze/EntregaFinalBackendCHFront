import { useTheme } from "@mui/material";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { openToastError } from "../../../../redux/handleToastErrorSlice";
import { openToast } from "../../../../redux/handleToastSlice";
import CheckoutPayment from "./CheckoutPayment";
import { endPurchase } from "../../../../services/carts.service";
import { CheckoutContext } from "../../../../context/CheckoutContext";
import { cartClean } from "../../../../redux/cartSlice";

const CheckoutPaymentContainer = ({handlePrevStep, handleLastStep}) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const dispatcher = useDispatch();
    const {handleSetOrderID} = useContext(CheckoutContext);
    
    // ESTO ES PARA RECIBIR LA CONFIRMACION DE PAGO
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(prevData=>true);
        try {
            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                redirect: 'if_required'
            })
            if (!error) {
                const res = await endPurchase();
                handleSetOrderID(res.result._id);
                dispatcher(openToast());
                dispatcher(cartClean);
                setTimeout(() => {
                    setLoading(prevData=>false);
                    handleLastStep();
                }, 1000);
            } else {
                console.log(error);
                setLoading(prevData=>false);
                dispatcher(openToastError());
            };
        } catch (e) {
            console.log(e);
            dispatcher(openToastError());
        } finally {
            setLoading(prevData=>false);
        };
    };

    const stepBack = () => {
        handlePrevStep();
    };

    return (
        <CheckoutPayment
            theme={theme}
            loading={loading}
            stepBack={stepBack}
            handleSubmit={handleSubmit}
        />
    );
};

export default CheckoutPaymentContainer;