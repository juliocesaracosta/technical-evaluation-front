import React from 'react'
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    let location = useLocation();
    const paths= ['/', '/login', '/register']
    
    if ((!sessionStorage.getItem('token') || !sessionStorage.getItem('user')) && !paths.includes(location.pathname)) {
        return <Navigate to="/login"  replace />
    } else {
        return children
    }
};

export default ProtectedRoute;