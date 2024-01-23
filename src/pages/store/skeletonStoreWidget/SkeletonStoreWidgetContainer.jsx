import { Paper, Skeleton, Stack, useTheme } from "@mui/material";

const SkeletonStoreContainer = () => {
    const theme = useTheme();
    
    return (
        <Paper
            sx={{p:4, backgroundColor: theme.palette.grey.main, mt: 4 }}
        >
            <Stack 
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-around'}
                alignItems={'center'}
                flexWrap={'wrap'}
                spacing={1}
            >
                <Skeleton variant="rounded" width={210} height={300} />
                <Skeleton variant="rounded" width={210} height={300} />
                <Skeleton variant="rounded" width={210} height={300} />
                <Skeleton variant="rounded" width={210} height={300} />
                <Skeleton variant="rounded" width={210} height={300} />
                <Skeleton variant="rounded" width={210} height={300} />
                <Skeleton variant="rounded" width={210} height={300} />
                <Skeleton variant="rounded" width={210} height={300} />
                <Skeleton variant="rounded" width={210} height={300} />
                <Skeleton variant="rounded" width={210} height={300} />
            </Stack>
        </Paper>
    );
};

export default SkeletonStoreContainer;