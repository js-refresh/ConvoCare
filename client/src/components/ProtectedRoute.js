import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'

export default function ProtectedRoute(props) {
    const user = useSelector((state) => state.user);
    
    if (user) {
        return <Route {...props}/>
    } else {
        return <Redirect to='/login' />
    } // change the else return to an unauthorized component. 
}
