import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import { useTheme } from '@mui/material';
import { useState } from "react";
import { uploadDocumentsUser } from "../../services/users.service";
import { openToast } from "../../redux/handleToastSlice";
import { openToastError } from "../../redux/handleToastErrorSlice";

const ProfileContainer = () => {
    const theme = useTheme();
    const userData = useSelector(store=>store.userData);
    const [loading, setLoading] = useState(false);
    const dispatcher = useDispatch();
    const adminKey = import.meta.env.VITE_ADMIN_KEY;
    const premiumKey = import.meta.env.VITE_PREMIUM_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(prevData => true);
        try {
            const formData = new FormData(e.target);
            const identificacionFile = formData.get("Identificacion");
            const domicilioFile = formData.get("Comprobante de domicilio");
            const cuentaFile = formData.get("Comprobante de estado de cuenta");
            const data = {"Identificacion": identificacionFile, "Comprobante de domicilio": domicilioFile, "Comprobante de estado de cuenta": cuentaFile};
            const res = await uploadDocumentsUser(userData._id, formData);
            dispatcher(openToast());
        } catch (e) {
            console.log(e);
            dispatcher(openToastError());
        } finally {
            setLoading(prevData => false);
        }
    };

    return (
        <Profile
            theme={theme}
            userData={userData}
            handleSubmit={handleSubmit}
            loading={loading}
            adminKey={adminKey}
            premiumKey={premiumKey}
        />
    );
};

export default ProfileContainer;