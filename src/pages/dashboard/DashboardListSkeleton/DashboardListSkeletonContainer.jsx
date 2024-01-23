import { Skeleton, Stack } from "@mui/material";

const DashboardListSkeletonContainer = () => {
    return (
        <Stack
            spacing={2}
        >
            <Skeleton
                variant="rectangular"
                width={'100%'}
                height={40}
            />
            <Skeleton
                variant="rectangular"
                width={'100%'}
                height={40}
            />
            <Skeleton
                variant="rectangular"
                width={'100%'}
                height={40}
            />
            <Skeleton
                variant="rectangular"
                width={'100%'}
                height={40}
            />
            <Skeleton
                variant="rectangular"
                width={'100%'}
                height={40}
            />
            <Skeleton
                variant="rectangular"
                width={'100%'}
                height={40}
            />
            <Skeleton
                variant="rectangular"
                width={'100%'}
                height={40}
            />
        </Stack>
    );
};

export default DashboardListSkeletonContainer;