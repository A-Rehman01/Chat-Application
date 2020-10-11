import React, { useEffect } from 'react'
import { Route, useNavigate } from 'react-router-dom'

export const PrivateRoute = ({ Element, path }) => {
    const navigate = useNavigate();

    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    useEffect(() => {
        function check() {
            return (
                <Route path={path} element={user ? navigate('/') : navigate('/signup')} />
            )
        }
        check()
    }, [2])

    return (
        <div>
        </div>
    )

}
