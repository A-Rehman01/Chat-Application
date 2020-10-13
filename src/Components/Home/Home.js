import React from 'react'
import style from './home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        width: '100%',
        display: 'flex',
        justifyContent:  'center',
        // border: '1px solid #D2B4DE',
        // boxShadow: '2px 3px 3px #D2B4DE',
        marginBottom: theme.spacing(1),
    },
}));

export const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={style.container}>
                <div className={style.userlist}>
                    <div className={style.imageandinput}>
                        <Paper className={classes.paper}>
                            <div className={style.imagediv}>
                                <SearchIcon style={{ color: '#8E44AD' }} />
                            </div>
                            <div className={style.inputdiv}>
                                <input className={style.search} />
                            </div>
                        </Paper>
                    </div>
                    <div className={style.users} >
                        <img src={'https://www.w3schools.com/howto/img_avatar.png'} className={style.UserImage} />
                        <div className={style.usersName}>
                            Abdul Rehman
                        </div>
                    </div>
                    <div className={style.hrtag}></div>
                    <div className={style.users} >
                        <img src={'https://www.w3schools.com/howto/img_avatar.png'} className={style.UserImage} />
                        <div className={style.usersName}>
                            Abdul Rehman
                        </div>
                    </div>
                    <div className={style.hrtag}></div>
                    <div className={style.users} >
                        <img src={'https://www.w3schools.com/howto/img_avatar.png'} className={style.UserImage} />
                        <div className={style.usersName}>
                            Abdul Rehman
                        </div>
                    </div>
                </div>

                <div className={style.vl}></div>

                <div className={style.message}>
                    <div className={style.openchat}>Ali</div>

                    
                    <div className={style.mymsg}>
                        Hellow
                    </div>
                    
                    <div className={style.mymsg}>
                        Hellow
                    </div>
                    
                    <div className={style.yourmsg}>
                          Hellow
                    </div>
                    <div className={style.yourmsg}>
                          Hellow
                    </div>
                </div>
            </div>
        </div>
    )
}
