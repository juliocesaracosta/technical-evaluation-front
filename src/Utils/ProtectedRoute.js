import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation, useNavigate} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    let location = useLocation();

    if(!user.state.isAuthenticated) {
        console.log(user)
        //return <Navigate to="/login" state={{ from: location}} replace />
    }
    if ((!sessionStorage.getItem('token') || !sessionStorage.getItem('user')) && location.pathname === '/administration') {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
    return children

};

export default ProtectedRoute;