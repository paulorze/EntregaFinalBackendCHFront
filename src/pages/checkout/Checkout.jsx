import { Grid, Paper, Typography } from '@mui/material';
import './Checkout.css';
import CheckoutOrderDetailContainer from './checkoutOrderDetail/CheckoutOrderDetailContainer';
import CheckoutStepperContainer from './checkoutStepper/CheckoutStepperContainer';

const Checkout = ({theme}) => {
    return (
        <main
            style={{
                padding:'1rem',
                backgroundColor: theme.palette.primary.light
            }}
        >
            <Paper 
                sx={{
                    p:{xs:2, sm:4}, 
                    backgroundColor: theme.palette.grey.main}}
            >
                <Typography
                    variant='h3'
                >
                    Checkout
                </Typography>
                <Grid
                    container
                    marginTop={4}
                >                 
                    <CheckoutStepperContainer/>
                    <CheckoutOrderDetailContainer/>
                </Grid>
            </Paper>
        </main>
    );
};

export default Checkout;