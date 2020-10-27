import React, { useState, useEffect } from 'react'
import { Link, useNavigate,Route } from 'react-router-dom'
import style from './Signin.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux'
import { SignInInitialData, signinData } from '../../Reducer/signinSlice'
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

export const SignIn = () => {
    const classes = useStyles();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const dispatch = useDispatch();
    const data = useSelector(signinData);
    const navigate = useNavigate();

    let HandleForm = (e) => {
        e.preventDefault();
        let user = {
            email: Email,
            password: Password
        }
        dispatch(SignInInitialData(user))
    }
    useEffect(() => {
        function removefield() {
            console.log(data.error)
            if (data.authenticated === true && data.error === null && data.uid !== '') {
                setPassword('');
                setEmail('');
                navigate('/',{replace:true})
            }
             
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
                        Sign In
                        </div>
                    <form onSubmit={HandleForm}>
                        <TextField
                            value={Email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className={style.email}
                            required
                            type='email'
                            id="email"
                            label="Email"
                            variant="outlined" /> <br /><br />

                        <TextField
                            value={Password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            className={style.password}
                            required
                            type='password'
                            id="outlined-basic"
                            label="Password"
                            variant="outlined" />
                        <br />
                        <p className={style.error}>
                            {data.error==='Please Signup first'? null : data.error}
                            </p>
                        <p className={style.signupinfo}>If not an Account <Link to='/signup' style={{ color: 'blue' }}>   Signup </Link></p>
                        <Button
                            type='Submit'
                            variant="contained"
                            className={style.Signbtn}>
                            Signin
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}
