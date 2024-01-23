import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openToastError } from "../../redux/handleToastErrorSlice";
import { getAllUsers } from "../../services/users.service";
import Dashboard from "./Dashboard";

export const DashboardContainer = () => {
    const theme = useTheme();
    const [loading, setLoading] = useState(true);
    const [usersList, setUsersList] = useState();
    const dispatcher = useDispatch();

    useEffect(()=>{
        getAllUsers()
            .then(data =>  {
                setUsersList(prevData => data);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                dispatcher(openToastError());
            })
    }, []);

    return (
        <Dashboard
            theme={theme}
            loading={loading}
            usersList={usersList}
        />
    );
};
