import { useDispatch, useSelector } from "react-redux";
import { closeToastError } from "../../redux/handleToastErrorSlice";
import ToastError from "./ToastError";

const ToastErrorContainer = () => {
    const handleToastError = useSelector(store => store.handleToastError);
    const dispatcher = useDispatch();
    const handleCloseToastError = () => {
        dispatcher(closeToastError());
    };

    return (
        <ToastError
            handleToastError={handleToastError}
            handleCloseToastError={handleCloseToastError}
        />
    );
};

export default ToastErrorContainer;