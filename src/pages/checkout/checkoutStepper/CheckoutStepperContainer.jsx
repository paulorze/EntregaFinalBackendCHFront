import { useContext, useState } from 'react';
import CheckoutStepper from './CheckoutStepper';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutContext } from '../../../context/CheckoutContext';

const CheckoutStepperContainer = () => {
    const [activeStep, setActiveStep] = useState(0);
    const handleNextStep = () => {
        setActiveStep(1);
    };
    const handlePrevStep = () => {
        setActiveStep(0);
    };
    const handleLastStep = () => {
        setActiveStep(2);
    };

    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLICKEY);
    const {clientSecret} = useContext(CheckoutContext);

    return (
        <CheckoutStepper
            activeStep={activeStep}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            handleLastStep={handleLastStep}
            stripePromise={stripePromise}
            clientSecret={clientSecret}
        />
    );
};

export default CheckoutStepperContainer;