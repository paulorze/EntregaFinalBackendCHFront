import { Alert, Box, Button, Paper, Snackbar, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ResetPassword = ({theme, handleSubmit, handleChange, errors, open, handleClose}) => {
    return (
        <main
            style={{
                padding: "2rem", backgroundColor: theme.palette.primary.light
            }}
        >
            <Paper
                sx={{p:4, backgroundColor: theme.palette.grey.main}}
            >
                <Typography
                    variant="h3"
                >
                    Reestablecer Contraseña
                </Typography>
                <form
                    className="login__form"
                    onSubmit={handleSubmit}
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'center',
                        maxWidth: '400px',
                        margin: '0 auto'
                    }}
                >
                    <TextField
                        style={{
                            margin: '1rem'
                        }}
                        fullWidth
                        error={errors.email ? true : false}
                        helperText = {errors.email}
                        size='small'
                        variant='outlined'
                        type= {'email'}
                        label= {'E-Mail'}
                        name= {'email'}
                        placeholder= {'Ingrese su E-Mail'} 
                        required
                        onChange={handleChange}
                        autoComplete="true"
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        sx={{my:2}}
                        fullWidth
                    >
                        Reestablecer Contraseña
                    </Button>
                </form>
                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-around'}
                    flexWrap={'wrap'}
                    maxWidth={'600px'}
                    margin={'0 auto'}
                >
                    <Link
                        to={'/register'}
                    >
                        <Typography
                            variant="body1"
                            color={'secondary'}
                            textAlign={'center'}
                            my={2}
                        >
                            ¿Aún no tienes cuenta? Regístrate aquí.
                        </Typography>
                    </Link>
                    <Link
                        to={'/'}
                    >
                        <Typography
                            variant="body1"
                            color={'secondary'}
                            textAlign={'center'}
                            my={2}
                        >
                            ¿Ya tienes cuenta? Inicia sesión aquí.
                        </Typography>
                    </Link>
                </Box>
            </Paper>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity='success'
                >
                    ¡Revisá tu casilla de E-Mail y seguí las instrucciones!
                </Alert>
            </Snackbar>
        </main>
    );
};

export default ResetPassword;