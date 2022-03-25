import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { FirebaseContext } from '../context/FirebaseProvider';
import CircularLoader from '../customComponent/circularLoader/CircularLoader';

const AdminPrivateRoute = ({children}) => {
    const {admin, adminIsLoading} = useContext(FirebaseContext);
    const location = useLocation();
    console.log(adminIsLoading)
   

    if(adminIsLoading) {
        return <CircularLoader/>
    }

    if(!admin?.isAdmin) {
        return <Navigate to="/login" state={{from: location}} replace />
    }

    return children;
};

export default AdminPrivateRoute;