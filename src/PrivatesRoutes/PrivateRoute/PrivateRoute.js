import React, { useEffect, useState } from 'react'
import { Route, useNavigate } from 'react-router-dom'

export const PrivateRoute = ({ Element, path }) => {
    const navigate = useNavigate();
    const [state, setstate] = useState();
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    useEffect(() => {
        function check() {
            if (user) {
                setstate(Element)
            }

            else {
                setstate(navigate('/signin'))
            }
        }
        check()
    }, [user])

    return (
        <Route path={path} element={state} />
    )

}
