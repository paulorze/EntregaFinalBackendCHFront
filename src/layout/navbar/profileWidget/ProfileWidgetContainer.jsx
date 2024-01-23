import { useSelector } from "react-redux";
import ProfileWidget from "./ProfileWidget";
import { useTheme } from "@mui/material";


const ProfileWidgetContainer = ({handleOpen, tag = null}) => {
    const theme = useTheme();
    const userData = useSelector(store=>store.userData)
    const img = userData?.img;
    return (
        <ProfileWidget
            handleOpen = {handleOpen}
            tag = {tag}
            theme={theme}
            img = {img}
        />
    );
};

export default ProfileWidgetContainer;