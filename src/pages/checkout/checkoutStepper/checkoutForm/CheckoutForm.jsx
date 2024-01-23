import SendIcon from '@mui/icons-material/Send';
import { Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CheckoutForm = ({hideStep, handleSubmit, handleChange, errors, loading}) => {
    return (
        hideStep
            ? <Typography
                variant='h6'
                marginTop={5}
            >
                Aún no tienes productos en tu carrito :(
            </Typography>
            : <form 
                className='checkout__form'
                onSubmit={handleSubmit}
                style={{
                    maxWidth: '500px',
                    margin: 20,
                    padding: 8
                }}
            >
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            fullWidth
                            sx={{my: 2}}
                            color='secondary'
                            error={errors.name ? true : false}
                            helperText = {errors.name}
                            size='small'
                            variant='outlined'
                            type= {'text'}
                            label= {'Nombre'}
                            name= {'name'}
                            placeholder= {'Ingrese su Nombre Completo'} 
                            onChange={handleChange}
                            autoComplete='true'
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            fullWidth
                            sx={{my: 2}}
                            color='secondary'
                            error={errors.mail ? true : false}
                            helperText = {errors.mail}
                            size='small'
                            variant='outlined'
                            type= {'email'}
                            label= {'Mail'}
                            name= {'mail'}
                            placeholder= {'Ingrese su Mail'} 
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        pr={{md:1}}
                    >
                        <TextField
                            fullWidth
                            sx={{my: 2}}
                            color='secondary'
                            error={errors.address ? true : false}
                            helperText = {errors.address}
                            size='small'
                            variant='outlined'
                            type= {'text'}
                            label= {'Dirección de Envío'}
                            name= {'address'}
                            placeholder= {'Ingrese su Dirección de Envío'} 
                            autoComplete='true'
                            onChange={handleChange}
                        /> 
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        pl={{md:1}}
                    >
                        <TextField
                            fullWidth
                            sx={{my: 2}}
                            color='secondary'
                            error={errors.postalCode ? true : false}
                            helperText = {errors.postalCode}
                            size='small'
                            variant='outlined'
                            type= {'text'}
                            label= {'Código Postal'}
                            name= {'postalCode'}
                            placeholder= {'Ingrese su Código Postal'} 
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                    <Grid
                        item
                        xs={12}
                        display={'flex'}
                        flexWrap={'wrap'}
                        alignItems={'center'}
                        justifyContent={'space-around'}
                    >
                        <Link
                            to={'/cart'}
                        >
                            <Button
                                type='button'
                                variant='outlined'
                                color='error'
                                sx={{
                                    marginY:'1rem'
                                }}
                            >
                                Cancelar
                            </Button>
                        </Link>
                        <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            endIcon={loading ? <CircularProgress size={24} color='inherit'/> : <SendIcon />}
                            sx={{
                                marginY:'1rem'
                            }}
                        >
                            Siguiente
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

export default CheckoutForm;