import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useFirebase from '../customHooks/useFirebase';
import CircularLoader from '../customComponent/circularLoader/CircularLoader';

const AdminPrivateRoute = ({children}) => {
    const {admin, isLoading} = useFirebase();
    const location = useLocation();

    if(isLoading) {
        return <CircularLoader/>
    }

    if(!admin.isAdmin) {
        return <Navigate to="/login" state={{from: location}} replace />
    }

    return children;
};

export default AdminPrivateRoute;