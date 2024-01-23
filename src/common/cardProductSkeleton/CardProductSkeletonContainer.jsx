import { Skeleton, Stack } from "@mui/material";

const CardProductSkeletonContainer = () => {
    return (
        <Stack 
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-around'}
            alignItems={'center'}
            flexWrap={'wrap'}
            width={'100%'}
        >
            <Skeleton variant="rounded" width={210} height={300} sx={{margin:2}}/>
            <Skeleton variant="rounded" width={210} height={300} sx={{margin:2}}/>
            <Skeleton variant="rounded" width={210} height={300} sx={{margin:2}}/>
            <Skeleton variant="rounded" width={210} height={300} sx={{margin:2}}/>
            <Skeleton variant="rounded" width={210} height={300} sx={{margin:2}}/>
        </Stack>
    );
};

export default CardProductSkeletonContainer;