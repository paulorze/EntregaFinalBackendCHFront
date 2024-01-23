import { CircularProgress, Grid, Paper, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ToastComponent from "../../common/toast/ToastContainer";

const Profile = ({theme, userData, handleSubmit, loading, adminKey, premiumKey}) => {
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
                    marginBottom={2}
                >
                    Tu Perfil
                </Typography>
                <Grid
                    container
                >
                    <Grid
                        component={'section'}
                        item
                        xs={12}
                        md={6}
                    >
                        <Typography
                            variant="h5"
                            marginBottom={2}
                        >
                            Tus Datos
                        </Typography>
                        <Typography
                            variant="body1"
                        marginBottom={2}
                        >
                            Nombre de Usuario: {userData.username}
                        </Typography>
                        <Typography
                            variant="body1"
                            marginBottom={2}
                        >
                            Email: {userData.email}
                        </Typography>
                        <Typography
                            variant="body1"
                            marginBottom={2}
                        >
                            ID: {userData._id}
                        </Typography>
                        <Typography
                            variant="body1"
                            marginBottom={2}
                        >
                            Rol: {(userData.role === adminKey) ? "Usuario Administrador" : ((userData.role === premiumKey) ? "Usuario Premium" : "Usuario Regular")}
                        </Typography>
                    </Grid>
                    <Grid
                        component={'aside'}
                        item
                        xs={12}
                        md={6}
                    >
                        <Typography
                            variant="h5"
                        >
                            Tus Documentos
                        </Typography>
                        <form
                            encType="multipart/form-data"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onSubmit={handleSubmit}
                        >
                            <Button type="button" component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{marginY:2}} >
                                Subir Identificacion
                                <input type="file" hidden name="Identificacion"/>
                            </Button>
                            <Button type="button" component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{marginY:2}}>
                                Subir Comprobante de domicilio
                                <input type="file" hidden name="Comprobante de domicilio"/>
                            </Button>
                            <Button type="button" component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{marginY:2}}>
                                Subir Comprobante de estado de cuenta
                                <input type="file" hidden name="Comprobante de estado de cuenta"/>
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color='success'
                                sx={{marginY:2}}
                                endIcon={loading && <CircularProgress size={24} color="inherit"/> }
                            >
                                Actualizar Documentos
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Paper>
            <ToastComponent
                mensaje={'Tus documentos se han actualizado exitosamente.'}
            />
        </main>
    );
};

export default Profile;