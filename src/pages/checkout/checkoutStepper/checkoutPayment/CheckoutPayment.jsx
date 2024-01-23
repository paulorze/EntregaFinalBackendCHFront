import { Button, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import './CheckoutPayment.css';
import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import ToastComponent from '../../../../common/toast/ToastContainer';


const CheckoutPayment = ({theme, loading, stepBack, handleSubmit}) => {
    return (
        <>
            <Grid
                container
                padding={4}
            >
                <Grid
                    item
                    xs={12}
                    marginY={2}
                >
                    <Typography
                        variant='h5'
                        textAlign={'left'}
                    >
                        Pagar Mediante Stripe
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Grid
                        container
                    >
                        <Grid
                            item
                            xs={12}
                            marginY={2}
                        >
                            <Typography
                                variant='h5'
                            >
                                Ingrese los datos de su tarjeta
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            marginY={2}
                        >
                            <form
                                styles={{
                                    width: '100%'
                                }}
                            >
                                <Grid
                                    container
                                >
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <PaymentElement/>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        marginTop={4}
                                    >
                                        <Button
                                            variant='contained'
                                            color='secondary'
                                            onClick={handleSubmit}
                                            endIcon={loading && <CircularProgress size={24} color='inherit'/>}
                                        >
                                            Pagar con Stripe
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider
                    component={'hr'}
                    width={'100%'}
                    sx={{
                        marginY:4
                    }}
                />
                <Grid
                    item
                    xs={12}
                    display={'flex'}
                    flexWrap={'wrap'}
                    alignItems={'center'}
                >
                    <Button
                        type='button'
                        variant='outlined'
                        color='error'
                        sx={{
                            marginY:'1rem',
                            alignSelf:'flex-start'
                        }}
                        onClick={stepBack}
                    >
                        Atrás
                    </Button>
                </Grid>
            </Grid>
            <ToastComponent
                mensaje={"Tu pago ha sido procesado exitosamente."}
            />
        </>
    );
};

export default CheckoutPayment;