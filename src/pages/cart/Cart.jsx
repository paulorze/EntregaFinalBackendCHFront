import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';
import { Button, CircularProgress, Grid, List, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ToastComponent from '../../common/toast/ToastContainer';
import DeleteCartContainer from "./deleteCart/DeleteCartContainer";
import ProductsListCartContainer from "./productsListCart/ProductsListCartContainer";

const Cart = ({theme, cart, total, open, handleOpen, handleClose, handleConfirm, loading}) => {
    return (
        <main
            style={{
                padding:'2rem',
                backgroundColor: theme.palette.primary.light
            }}
        >
            <Paper
                className="cart__paper"
                sx={{p:4, backgroundColor: theme.palette.grey.main, mb:4}}
            >
                <Typography
                    variant="h3"
                >
                    Carrito
                </Typography>
            </Paper>
            <Paper
                className="cart__paper"
                sx={{p:{xs:2, sm:4}, backgroundColor: theme.palette.grey.main}}
            >
                {Object.keys(cart).length === 0 
                    ? (
                        <Typography
                            variant="h4"
                        >
                            A&uacute;n no tienes ningun producto agregado a tu carrito.
                        </Typography>
                    ) 
                    : (
                        <Grid
                            container
                        >
                            <Grid
                                item
                                xs={12}
                            >
                                <List>
                                    {
                                        Object.entries(cart).map((product)=>(
                                            <ProductsListCartContainer
                                                key = {product[1]._id}
                                                product = {product[1]}
                                            />
                                        ))
                                    }
                                </List>
                            </Grid>
                            <Grid
                                container
                                item
                                style={{
                                    padding: '1rem'
                                }}
                                xs={12}
                            >
                                <Grid
                                    item
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    xs={6}
                                >
                                    <Typography
                                        style={{
                                            fontSize : '1.5rem'
                                        }}
                                    >
                                        Total de la compra: 
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    xs={6}
                                >
                                    {
                                        loading
                                            ? <CircularProgress
                                                color={'inherit'}
                                            />
                                            :<Typography
                                                style={{
                                                    fontSize : '1.5rem'
                                                }}
                                                component={'strong'}
                                            >
                                                ${total}
                                            </Typography>
                                    }
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                style={{
                                    padding: '1rem'
                                }}
                                xs={12}
                            >
                                <Grid
                                    item
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    xs={12}
                                    sm={6}
                                    my={2}
                                >
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        endIcon={<DeleteForeverIcon/>}
                                        onClick={handleOpen}
                                    >
                                        Vaciar Carrito
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    xs={12}
                                    sm={6}
                                    my={2}
                                >
                                    <Link
                                        to={'/checkout'}
                                    >
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            endIcon={<SendIcon/>}
                                        >
                                            Confirmar compra
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                }
            </Paper>
            <DeleteCartContainer
                open={open}
                handleClose={handleClose}
                handleConfirm={handleConfirm}
            />
            <ToastComponent
                mensaje={'¡Tu carrito se ha actualizado exitosamente!'}
            />
        </main>
    );
};

export default Cart;