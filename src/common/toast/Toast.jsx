import { Alert, Snackbar } from '@mui/material';

const Toast = ({handleToast, handleCloseToast, mensaje}) => {
    return (
        <Snackbar
            open={handleToast}
            autoHideDuration={2000}
            onClose={handleCloseToast}
        >
            <Alert
                severity='success'
            >
                {mensaje}
            </Alert>
        </Snackbar>
    );
};

export default Toast;