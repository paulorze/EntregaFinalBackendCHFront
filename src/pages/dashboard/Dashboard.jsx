import { Grid, List, Paper, Typography } from "@mui/material";
import DashboardListSkeletonContainer from "./DashboardListSkeleton/DashboardListSkeletonContainer";
import DashboardListItemContainer from "./DashboardListItem/DashboardListItemContainer";
import ToastComponent from "../../common/toast/ToastContainer";

const Dashboard = ({theme, loading, usersList}) => {
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
                    Dashboard Administrador
                </Typography>
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography
                            variant="h3"
                            marginBottom={2}
                        >
                            Lista de Usuarios
                        </Typography>
                        {
                            loading
                                ? <DashboardListSkeletonContainer/>
                                : <List>
                                    {usersList.map(user => (
                                        <DashboardListItemContainer
                                            key={user._id}
                                            user={user}
                                        />
                                    ))}
                                </List>
                        }
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >

                    </Grid>
                </Grid>
            </Paper>
            <ToastComponent
                mensaje={'Tu operacion ha sido realizada exitosamente.'}
            />
        </main>
    );
};

export default Dashboard;