import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PublicRoute = () => {
    const { user } = useAuth();

    if (user?.displayName) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default PublicRoute;