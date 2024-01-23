import { useTheme } from '@mui/material';
import DeleteCart from './DeleteCart';

const DeleteCartContainer = ({open, handleClose, handleConfirm}) => {
    const theme = useTheme();

    return (
        <DeleteCart
            theme={theme}
            open={open}
            handleClose={handleClose}
            handleConfirm={handleConfirm}
        />
    );
};

export default DeleteCartContainer;