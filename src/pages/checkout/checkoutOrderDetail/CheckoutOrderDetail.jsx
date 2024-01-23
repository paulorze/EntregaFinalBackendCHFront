import { CircularProgress, Divider, Grid, List, Typography } from '@mui/material';
import ProductsListCheckoutContainer from '../productsListCheckout/ProductsListCheckoutContainer';

const CheckoutOrderDetail = ({cart, loading, totalProducts, orderTotal}) => {
    return (
        <Grid
            item
            className='checkout__cart'
            mt={{md:13}}
            xs={12}
            md={5}
        >
            <List>
                {Object.entries(cart).map(product=>(
                    <ProductsListCheckoutContainer
                        key={product[1]._id}
                        product={product[1]}
                    />
                ))}
            </List>
            <Grid
                container
                style={{
                    padding: '1rem'
                }}
            >
                <Grid
                    item
                    display={'flex'}
                    alignItems={'center'}
                    xs={12}
                    sm={8}
                >
                    <Typography
                        variant={'h6'}
                        fontWeight={400}
                    >
                        Subtotal Productos:
                    </Typography>
                </Grid>
                <Grid
                    item
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'flex-end'}
                    xs={12}
                    sm={4}
                >
                    {
                        loading
                            ? <CircularProgress
                                color={'inherit'}
                            />
                            :<Typography
                                variant={'h6'}
                                component={'strong'}
                            >
                                ${totalProducts}
                            </Typography>
                    }
                </Grid>
            </Grid>
            <Divider/>
            <Grid
                container
                style={{
                    padding: '1rem'
                }}
            >
                <Grid
                    item
                    display={'flex'}
                    alignItems={'center'}
                    xs={12}
                    sm={8}
                >
                    <Typography
                        variant={'h5'}
                        fontWeight={700}
                    >
                        Total de la Compra:
                    </Typography>
                </Grid>
                <Grid
                    item
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'flex-end'}
                    xs={12}
                    sm={4}
                >
                    {
                        loading
                            ? <CircularProgress
                                color={'inherit'}
                            />
                            :<Typography
                                variant={'h5'}
                                fontWeight={700}
                            >
                                ${orderTotal}
                            </Typography>
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CheckoutOrderDetail;