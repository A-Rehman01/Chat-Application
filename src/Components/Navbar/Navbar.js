import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
import ChatIcon from '@material-ui/icons/Chat';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector } from 'react-redux'
import { signinData } from '../../Reducer/signinSlice';

export const Navbar = () => {
    const data = useSelector(signinData)
    console.log("navbar  = > ", data);
    return (
        <div className={style.Container}>
            <div className={style.Appname}>< ChatIcon style={{ fontSize: '30px' }} /></div>

            <div className={style.UserName}>
                {
                    data.authenticated ? `${data.firstName} ${data.lastName}` : null
                }
            </div>

            <div className={style.Auth}>
                {
                    data.authenticated ?
                     'Logout' //    <Link to='/signin'> <ExitToAppIcon style={{ fontSize: '30px' ,color: 'white' }} /> </Link>
                        :
                    <Link to='/signup'><AccountCircleIcon style={{ fontSize: '30px',color: 'white' }} /></Link>
                }
            </div>
        </div>
    )
}
