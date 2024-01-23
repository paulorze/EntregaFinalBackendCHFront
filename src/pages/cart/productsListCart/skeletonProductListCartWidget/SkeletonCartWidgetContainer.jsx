import { Divider, Grid, ListItem, Skeleton } from "@mui/material";

const SkeletonProductListCartWidgetContainer = () => {
    return (
        <>
            <ListItem>
                <Grid
                    item
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{
                        display: {xs: 'none', md:'flex'}
                    }}
                    md={2}
                >
                    <div
                        className="cartItem__img"
                    >
                        <Skeleton
                            variant="circular"
                            width={100}
                            height={100}
                        />
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={10}
                >
                    <Grid
                        container
                    >
                        <Grid
                            item
                            display={"flex"}
                            flexDirection={'column'}
                            alignItems={"center"}
                            justifyContent={"center"}
                            xs={12}
                            sm={6}
                        >
                            <Skeleton
                                variant="rectangular"
                                width={'90%'}
                                height={40}
                                sx={{mb:2}}
                            />
                            <Skeleton
                                variant="rectangular"
                                width={'90%'}
                                height={40}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <Grid
                                container
                            >
                                <Grid
                                    item
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    xs={12}
                                    sx={{textAlign:'center'}}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'90%'}
                                        height={40}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    xs={6}
                                    sm={3}
                                    sx={{
                                        marginY:2
                                    }}
                                >
                                    <Skeleton
                                        variant="circular"
                                        width={40}
                                        height={40}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    xs={6}
                                    sm={3}
                                    sx={{
                                        marginY:2
                                    }}
                                >
                                    <Skeleton
                                        variant="circular"
                                        width={40}
                                        height={40}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    xs={12}
                                    sm={6}
                                    sx={{
                                        marginY:2
                                    }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        width={'90%'}
                                        height={40}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider
                component={'li'}
            />
        </>
    );
};

export default SkeletonProductListCartWidgetContainer;