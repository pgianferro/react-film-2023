import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hook/use_auth'

const PublicRoute = ({children}) => {

    const  { isLoggedin } = useAuth();

    if (!isLoggedin) return children;

    return <Navigate to={"/"}/>

}

export default PublicRoute