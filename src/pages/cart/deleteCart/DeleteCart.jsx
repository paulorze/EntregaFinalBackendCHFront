import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const DeleteCart = ({theme, open, handleClose, handleConfirm}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Vaciar el Carrito"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{color:'inherit'}}>
                    ¿Está seguro que quiere vaciar el carrito?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button 
                    color='success'
                    onClick={handleClose}
                >
                    Cancelar
                </Button>
                <Button 
                    variant='contained'
                    color='error'
                    onClick={handleConfirm} 
                    autoFocus
                >
                    Vaciar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteCart;