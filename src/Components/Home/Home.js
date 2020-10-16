import React, { useState, useEffect } from 'react'
import style from './home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import { UserList } from '../../Services/UserList'
import { UserListData, userlist } from '../../Reducer/UserlistSlice'
import { signinData } from '../../Reducer/signinSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth, firestore } from 'firebase';

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
    const [msg, setMsg] = useState('')
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector(userlist);
    const siginuser = useSelector(signinData);
    const HandleForm = (e) => {
        e.preventDefault();
        console.log(msg)
    }
    useEffect(() => {
        async function getlist() {
            const db = firestore();
            await db.collection('user')
                // .where()
                .onSnapshot(function (data) {
                    const user = [];
                    data.forEach((obj) => {
                        user.push(obj.data());
                    })
                    console.log(user)
                    dispatch(UserListData(user))
                })
        }
        getlist();
    }, [])
    console.log('userlist agai', user.userList)
    console.log('userlist agai data', siginuser)
    if (user.loading) {
        return (
            <h2>Loading....</h2>
        )
    }
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
                    <div className={style.userContainer}>

                        {
                            user.userList.map((obj) => {
                                if (siginuser.uid !== obj.uid) {
                                    return (
                                        <div key={obj.uid} className={style.mapdiv}>
                                            <div className={style.users} >
                                                <img src={'https://www.w3schools.com/howto/img_avatar.png'} className={style.UserImage} />

                                                <div className={style.usersName}>
                                                    {`${obj.firstName} ${obj.lastName}`}
                                                </div>
                                                <div className={style.usersonline}>
                                                    {
                                                        obj.isOnline ? <span> </span> : null
                                                    }
                                                </div>
                                            </div>
                                            <div className={style.hrtag}></div>
                                        </div>
                                    )
                                }

                            })
                        }

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

                    <form onSubmit={HandleForm} className={style.formdiv}>
                        <TextareaAutosize
                            className={style.textArea}
                            rowsMax={3}
                            aria-label="maximum height"
                            placeholder="Enter..."
                            value={msg}
                            required
                            onChange={(e) => {
                                setMsg(e.target.value)
                            }}
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
