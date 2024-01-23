import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button, CircularProgress, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = ({theme, showPass, setShowPass, invalidData, handleSubmit, handleChange, errors, loading}) => {
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
                    Iniciar Sesión
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
                    {invalidData 
                        ? <Typography 
                                variant="body1"
                                fontStyle={'italic'}
                                color={'error'}
                                className="datosinvalidos"
                            >
                                {invalidData}
                            </Typography>
                        : <Typography
                            variant="body1"
                            fontStyle={'italic'}
                            color={'error'}
                            className="datosinvalidos"
                            >
                                &nbsp;
                            </Typography>
                        }
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
                    <TextField
                        style={{
                            margin: '1rem'
                        }}
                        fullWidth
                        error={errors.password ? true : false}
                        helperText = {errors.password}
                        size='small'
                        variant='outlined'
                        type= {showPass ? 'text' : 'password'}
                        label= {'Contraseña'}
                        name= {'password'}
                        placeholder= {'Ingrese su contraseña'} 
                        required
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={()=>setShowPass(!showPass)}
                                    >
                                        {showPass ? <VisibilityOff/> : <Visibility/> }
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        sx={{my:2}}
                        fullWidth
                        endIcon={loading ? <CircularProgress size={24} color='inherit'/> : null}
                    >
                        Iniciar Sesión
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
                        to={'/resetPassword'}
                    >
                        <Typography
                            variant="body1"
                            color={'secondary'}
                            textAlign={'center'}
                            my={2}
                        >
                            ¿Olvidaste tu contraseña?
                        </Typography>
                    </Link>
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
                </Box>
            </Paper>
        </main>
    );
};

export default Login;