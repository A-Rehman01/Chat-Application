import React, { useEffect, useState } from 'react'
import { Route, useNavigate } from 'react-router-dom'

export const SigininPrivateRoute = ({ Element, path }) => {
    const navigate = useNavigate();
    const [state, setstate] = useState();
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    useEffect(() => {
        function check() {
            if (user) {
                setstate(navigate('/'))
            }
            else {
                setstate(Element)
            }
        }
        check()
    }, [user])

    return (
        <Route path={path} element={state} />
    )
}
