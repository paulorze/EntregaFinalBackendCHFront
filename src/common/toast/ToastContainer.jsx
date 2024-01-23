import { useDispatch, useSelector } from "react-redux";
import { closeToast } from "../../redux/handleToastSlice";
import Toast from "./Toast";


const ToastComponent = ({mensaje}) => {
    const handleToast = useSelector(store => store.handleToast);
    const dispatcher = useDispatch();
    const handleCloseToast = () => {
        dispatcher(closeToast());
    };

    return (
        <Toast
            handleToast={handleToast}
            handleCloseToast={handleCloseToast}
            mensaje={mensaje}
        />
    );
};

export default ToastComponent;