import { Grid, Step, StepLabel, Stepper } from "@mui/material";
import CheckoutFormContainer from "./checkoutForm/CheckoutFormContainer";
import CheckoutPaymentContainer from "./checkoutPayment/CheckoutPaymentContainer";
import CheckoutEndContainer from "./checkoutEnd/CheckoutEndContainer";
import { Elements } from "@stripe/react-stripe-js";


const CheckoutStepper = ({activeStep, handleNextStep, handlePrevStep, handleLastStep, stripePromise, clientSecret}) => {
    return (
        <Grid
            item
            xs={12}
            md={7}
        >
            <Grid
                item
                xs={12}
                px={4}
            >
                <Stepper
                    activeStep={activeStep}
                    alternativeLabel
                >
                    <Step>
                        <StepLabel>
                            Ingreso de Datos
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                            Pago
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                            Fin de la Compra
                        </StepLabel>
                    </Step>
                </Stepper>
            </Grid>
            <Grid
                item
                xs={12}
                display={'flex'}
                justifyContent={'center'}
                >
                {
                    activeStep === 0
                    && <CheckoutFormContainer
                            handleNextStep={handleNextStep}
                        />
                }
                {
                    (activeStep === 1 && stripePromise && clientSecret)
                    && <Elements
                        stripe={stripePromise}
                        options={{clientSecret:clientSecret}}
                    >                        
                        <CheckoutPaymentContainer
                                handlePrevStep={handlePrevStep}
                                handleLastStep={handleLastStep}
                            />
                    </Elements>
                }
                {
                    activeStep === 2
                        && <CheckoutEndContainer/>
                }
            </Grid>
        </Grid>

    );
};

export default CheckoutStepper;