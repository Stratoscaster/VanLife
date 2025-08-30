import React from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';

export default function AuthRequired() {
    const location = useLocation();
    console.log('State: ' + location?.state?.token);
    const authenticated = localStorage.getItem('token');

    if (!authenticated) {
        const loginRedirect = location.pathname;
        return <Navigate to="/login"
                         state={{message: 'You must log in first.', loginRedirect}}
                         replace={true}/>;
    }

    return <Outlet/>;
}