import { Alert, Snackbar } from '@mui/material';


const ToastError = ({handleToastError, handleCloseToastError}) => {
    return (
        <Snackbar
            open={handleToastError}
            autoHideDuration={2000}
            onClose={handleCloseToastError}
        >
            <Alert
                severity='error'
            >
                ¡Ups! Algo salió mal :(
            </Alert>
        </Snackbar>
    );
};

export default ToastError