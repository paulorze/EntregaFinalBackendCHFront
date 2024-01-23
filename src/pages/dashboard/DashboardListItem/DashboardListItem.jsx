import { Box, Button, CircularProgress, Divider, Grid, ListItem, Typography } from '@mui/material';

const DashboardListItem = ({user, adminKey, premiumKey, loadingRecategorize, handleRecategorize, loadingDeleteUser, handleDeleteUser}) => {
    return (
        <>
            <ListItem>
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Typography
                            variant='h6'
                            marginY={2}
                        >
                            Nombre de Usuario: {user.username}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Typography
                            variant='h6'
                            marginY={2}
                        >
                            E-Mail: {user.email}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        md={3}
                    >
                        <Typography
                            variant='body1'
                            marginY={2}
                        >
                            Nombre: {user.first_name}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        md={3}
                    >
                        <Typography
                            variant='body1'
                            marginY={2}
                        >
                            Apellido: {user.last_name}
                        </Typography>
                    </Grid> 
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Typography
                            variant='body1'
                            marginY={2}
                        >
                            Rol: {user.role === adminKey ? "Usuario Administrador" : user.role === premiumKey ? "Usuario Premium" : "Usuario Regular"}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <Grid
                            container
                        >
                            {
                                user.documents.map(document=>(
                                    <Grid
                                        item
                                        xs={4}
                                        key={document._id}
                                    >
                                        <Typography
                                            variant='body2'
                                            fontStyle={'italic'}
                                        >
                                            {document.name}
                                        </Typography>
                                        <Box
                                            width={100}
                                            height={100}
                                            overflow={'hidden'}
                                        >
                                            <img src={document.reference} alt={document.name} style={{width:'100%'}}/>
                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-around'}
                        flexWrap={'wrap'}
                    >
                        <Button
                            color='success'
                            variant='contained'
                            endIcon={loadingRecategorize && <CircularProgress size={24} color='inherit'/>}
                            onClick={handleRecategorize}
                        >
                            {user.role === premiumKey ? "Pasar a Usuario Regular" : "Pasar a Usuario Premium"}
                        </Button>
                        <Button
                            color='error'
                            variant='contained'
                            endIcon={loadingDeleteUser && <CircularProgress size={24} color='inherit'/>}
                            onClick={handleDeleteUser}
                        >
                            Eliminar Usuario
                        </Button>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider
                component={'hr'}
                width={'100%'}
                sx={{
                    marginY:4
                }}
            />
        </>
    );
};

export default DashboardListItem;