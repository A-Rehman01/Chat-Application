import React from 'react'
import style from './home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing(1),
        backgroundColor: 'rgb(243, 231, 243)',
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
                       <Paper className={style.openchat}> Ali </Paper>
                

                        <div className={style.messagesection}>
                            <div className={style.chatcontainer}>
                                <div className={style.mymsg}>
                                    <span>A message text</span>
                                </div>
                                <div className={style.mymsg}>
                                    <span>A message text</span>
                                </div>
                                <div className={style.mymsg}>
                                    <span>A message text</span>
                                </div>
                                <div className={style.yourmsg}>
                                    <span>A message text A message text A message text A message text A message text A message text A message text A message text A message text A message text </span>
                                </div>
                                <div className={style.yourmsg}>
                                    <span>A message text</span>
                                </div>
                                <div className={style.mymsg}>
                                    <span>A message text</span>
                                </div>
                                <div className={style.mymsg}>
                                    <span>A message text</span>
                                </div>
                                <div className={style.mymsg}>
                                    <span>A message text</span>
                                </div>
                            </div>
                        </div>
            
                    <form className={style.formdiv}>
                        <TextareaAutosize
                            className={style.textArea}
                            rowsMax={3}
                            aria-label="maximum height"
                            placeholder="Enter..."
                            defaultValue=''
                        />
                        <button
                            className={style.btn}
                            type='submit'
                        >
                            <SendIcon style={{ color: '#8E44AD' }} />
                        </button>
                    </form> 

                </div>

            </div>
        </div>
    )
}
