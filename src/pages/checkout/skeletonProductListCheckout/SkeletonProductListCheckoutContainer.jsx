import { Divider, Grid, ListItem, Skeleton } from "@mui/material";

const SkeletonProductListCheckoutContainer = () => {
    return (
        <>
            <ListItem>
                <Grid
                    container
                    item
                    xs={12}
                >
                    <Grid
                        item
                        display={"flex"}
                        flexDirection={'column'}
                        alignItems={"center"}
                        justifyContent={"center"}
                        xs={12}
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
                            height={20}
                            sx={{mb:2}}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'90%'}
                            height={20}
                        />
                    </Grid>
                </Grid>
            </ListItem>
            <Divider
                component={'li'}
            />
        </>
    );
};

export default SkeletonProductListCheckoutContainer;