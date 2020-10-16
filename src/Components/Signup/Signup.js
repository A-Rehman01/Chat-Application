import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from './Signup.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux'
import { InitialData, authData } from '../../Reducer/authSlice'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',

    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: '1px solid #8E44AD',
        boxShadow: '3px 5px 5px #D2B4DE',
    },
}));


export const Signup = () => {
    const classes = useStyles();
    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const dispatch = useDispatch();

    var data = useSelector(authData)
    function HandleForm(e) {
        e.preventDefault();
        console.log('HandleForm  Running.....')
        console.log(Fname, Lname, Email, Password)
        let user = {
            fname: Fname,
            lname: Lname,
            email: Email,
            password: Password
        }
        dispatch(InitialData(user))
        console.log("SignUp => ", data)
    }

    useEffect(() => {
        function removefield() {
            console.log(data.error)
            if (data.authenticated === true && data.error === null && data.uid !== '') {
                setFname('');
                setLname('');
                setPassword('');
                setEmail('');
                
            }
            console.log("SignUp => ", data)
        }
        removefield();
    }, [data.uid])

    if(data.authenticating){
        return(
            <div className={style.loading}>
            <CircularProgress style={{color: '#8E44AD',fontWeight:'bolder'}} />
            </div>
        )
    }

    return (
        <div className={classes.root}>
            <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                    <div className={style.Heading}>
                        Sign Up
                    </div>
                    <form onSubmit={HandleForm}>
                        <TextField
                            value={Fname}
                            onChange={(e) => { setFname(e.target.value) }}
                            className={style.fname}
                            required
                            type='text'
                            id="fname"
                            label="First name"
                            variant="outlined" />

                        <TextField
                            value={Lname}
                            onChange={(e) => { setLname(e.target.value) }}
                            className={style.lname}
                            required
                            type='text'
                            id="lname"
                            label="Last name"
                            variant="outlined" />

                        <TextField
                            value={Email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className={style.email}
                            required
                            type='email'
                            id="emmail"
                            label="Email"
                            variant="outlined" />

                        <TextField
                            value={Password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            className={style.password}
                            required
                            type='password'
                            id="password"
                            label="Password"
                            variant="outlined" />
                        <p className={style.error}>{data.error}</p>
                        <p className={style.signupinfo}>Already an Account <Link to='/signin' style={{ color: 'blue' }}> Signin </Link></p>

                        <Button
                            type='Submit'
                            variant="contained"
                            className={style.Signbtn}>
                            SignUp
                        </Button>
                    </form>
                </Paper>
            </Grid>

        </div>
    )
}
