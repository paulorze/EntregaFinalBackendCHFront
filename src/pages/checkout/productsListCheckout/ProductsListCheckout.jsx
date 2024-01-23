import { Divider, Grid, ListItem, Typography } from "@mui/material";

const ProductsListCheckout = ({name, quantity, subtotal}) => {
    return (
        <>
            <ListItem>
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography
                            style={{
                                fontSize: '1.15rem',
                                fontWeight: '700'
                            }}
                        >
                            {name} x {quantity}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        display={'flex'}
                        alignItems={'center'}
                        xs={8}
                    >
                        <Typography>
                            Subtotal:
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'flex-end'}
                        xs={4}
                    >
                        <Typography
                            style={{
                                fontSize: '1.15rem',
                                fontWeight: '700'
                            }}
                        >
                            ${subtotal}
                        </Typography>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider
                component={'li'}
            />
        </>
    );
};

export default ProductsListCheckout;