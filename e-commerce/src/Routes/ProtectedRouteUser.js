import React from 'react'
import { Navigate } from 'react-router-dom'
import { decodeToken } from "react-jwt";

const ProtectedRouteUser = ({children})=>{
    const token =localStorage.getItem('token')
    const decodedToken = decodeToken(token);
    if(!token || decodedToken?.role === 'admin'){
        return <Navigate to='/' />
    }
    return children
}

export default ProtectedRouteUser