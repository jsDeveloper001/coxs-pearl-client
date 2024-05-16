import React, { useContext } from 'react';
import { AuthContext } from '../Services/FirebaseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (user) return children
    if (loading) return ""
    return <Navigate to={'/login'} state={location.pathname} />
};

export default PrivateRoute;