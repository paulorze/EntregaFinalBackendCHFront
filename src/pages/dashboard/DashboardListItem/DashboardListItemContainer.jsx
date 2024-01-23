import React, { useState } from 'react'
import DashboardListItem from './DashboardListItem';
import { useDispatch } from 'react-redux';
import { openToastError } from '../../../redux/handleToastErrorSlice';
import { deleteUser, recategorizeUser } from '../../../services/users.service';
import { openToast } from '../../../redux/handleToastSlice';

const DashboardListItemContainer = ({user}) => {
    const adminKey = import.meta.env.VITE_ADMIN_KEY;
    const premiumKey = import.meta.env.VITE_PREMIUM_KEY;
    const dispatcher = useDispatch();

    const [loadingRecategorize, setLoadingRecategorize] = useState(false);
    const handleRecategorize = async () => {
        setLoadingRecategorize(prevData=> true);
        try {
            await recategorizeUser(user._id);
            dispatcher(openToast());
        } catch (e) {
            console.log(e);
            dispatcher(openToastError());
        } finally {
            setLoadingRecategorize(prevData => false);
        };
    };

    const [loadingDeleteUser, setLoadingDeleteUser]  = useState(false);
    const handleDeleteUser = async () => {
        setLoadingDeleteUser(prevData => true);
        try {
            await deleteUser(user._id);
            dispatcher(openToast());
        } catch (e) {
            console.log(e)
            dispatcher(openToastError());
        } finally {
            setLoadingDeleteUser(prevData => false);
        };
    };

    return (
        <DashboardListItem
            user={user}
            adminKey={adminKey}
            premiumKey={premiumKey}
            loadingRecategorize={loadingRecategorize}
            handleRecategorize={handleRecategorize}
            loadingDeleteUser={loadingDeleteUser}
            handleDeleteUser={handleDeleteUser}
        />
    );
};

export default DashboardListItemContainer;