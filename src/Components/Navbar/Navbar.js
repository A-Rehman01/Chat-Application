import React from 'react'
import style  from './navbar.module.css'


export const Navbar = () => {
    return (
        <div className={style.Container}>
            <div className={style.Appname}>Chat Application</div>
            <div className={style.UserName}>Abdul Rehman</div>
            <div className={style.Auth}>Sign in</div>
        </div>
    )
}
