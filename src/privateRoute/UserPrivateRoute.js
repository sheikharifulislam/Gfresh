import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useFirebase from '../customHooks/useFirebase';
import CircularLoader from '../customComponent/circularLoader/CircularLoader';

const UserPrivateRoute = ({children}) => {

    const {user, isLoading} = useFirebase();
    const location = useLocation();

    if(isLoading) {
        return <CircularLoader/>
    }

    if(!user.email) {
        return <Navigate to="/login" state={{from: location}} replace />
    }

    return children;
};

export default UserPrivateRoute;