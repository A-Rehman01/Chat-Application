import React, { useState, useEffect } from 'react'
import style from './home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import { UserListData, userlist } from '../../Reducer/UserlistSlice'
import { signinData } from '../../Reducer/signinSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth, firestore } from 'firebase';
import CircularProgress from '@material-ui/core/CircularProgress';
import { UserlistHome } from './Userlist'
import Logo from '../../Assests/Logo.png';
import { Message } from '../../Services/Message';
import { messagelist, MessageListData } from '../../Reducer/MessageSlice';

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
    const [openchatuser, setopenchatuser] = useState('')
    const [display, setDisplay] = useState(false)
    const [user_uid_2, set_user_uid_2] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector(userlist);
    const siginuser = useSelector(signinData);
    const messages = useSelector(messagelist)

    const HandleForm = (e) => {
        e.preventDefault();
        console.log(msg)

        let msgObj = {
            user_uid_1: siginuser.uid,
            user_uid_2,
            message: msg
        }
        console.log(msgObj)
        Message(msgObj);
        setMsg('')
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

    useEffect(() => {
        async function getmessagelist(userObj) {
            const db = firestore();
            await db.collection('conversation')
                .where('user_uid_1', 'in', [userObj.uid_1, userObj.uid_2])
                .orderBy('createdAt','desc')
                .onSnapshot(function (data) {
                    const conversation = [];
                    data.forEach((obj) => {
                        if (
                            (obj.data().user_uid_1 === userObj.uid_1 && obj.data().user_uid_2 === userObj.uid_2)
                            || (obj.data().user_uid_1 === userObj.uid_2 && obj.data().user_uid_2 === userObj.uid_1)
                        ) {
                            conversation.push(obj.data());
                        }
                    })
                    console.log("=>>>>>", conversation)
                    dispatch(MessageListData(conversation));
                })
        }
        getmessagelist({ uid_1: siginuser.uid, uid_2: user_uid_2 });
    }, [user_uid_2])

    console.log(messages)

    if (user.loading) {
        return (
            <div className={style.loading}>
                <CircularProgress style={{ color: '#8E44AD', fontWeight: 'bolder' }} />
            </div>
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
                                        <UserlistHome
                                            key={obj.uid}
                                            obj={obj}
                                            name={setopenchatuser}
                                            show={setDisplay}
                                            set_user_uid_2={set_user_uid_2}
                                        />
                                    )
                                }
                            })
                        }

                    </div>
                </div>

                <div className={style.vl}></div>

                <div className={style.message}>
                    {
                        display ?
                            <Paper className={style.openchat}> {openchatuser} </Paper>
                            : null
                    }
                    {
                        display ?
                            <div className={style.messagesection}>
                                <div className={style.chatcontainer}>
                                    
                                    {
                                        
                                            messages.loading  ?
                                             <h3>Loading</h3>:
                                        messages.messagelist.map((obj, index) => {
                                            
                                            return (
                                                <div key={index} className={obj.user_uid_2 === user_uid_2 ? style.mymsg : style.yourmsg}>
                                                    <span>{obj.message}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            : null
                    }


                    {
                        display ?
                            <form onSubmit={HandleForm} className={style.formdiv}>
                                <TextareaAutosize
                                    className={style.textArea}
                                    rowsMax={2}
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
                            : <div className={style.displaylogo}>
                                <img src={Logo} alt='Logo' />
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}
