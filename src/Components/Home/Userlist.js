import React,{useState} from 'react'
import style from './home.module.css'

export const UserlistHome = ({obj,name,show,set_user_uid_2,user_uid_2}) => {

    const [cssclass, setcssclass] = useState(false);
    // const [cssclass2, setcssclass2] = useState(false);
    const displayUser =  () =>{
        console.log('running')
        name(`${obj.firstName} ${obj.lastName}`)
        show(true)
        set_user_uid_2(obj.uid)
        
    }
    return (
        // <div onClick={displayUser} className={`${style.mapdiv} ${cssclass ? style.focus : null }`}>
        <div onClick={displayUser} className={`${style.mapdiv} ${cssclass ? style.focus : null }`}>
        
            <div className={style.users} >
                <img src={'https://www.w3schools.com/howto/img_avatar.png'} className={style.UserImage} />
                <div className={style.nameandonline}>
                    <div className={style.usersName}>
                        {`${obj.firstName} ${obj.lastName}`}
                    </div>

                    <div className={style.usersonline}>
                        {
                            obj.isOnline ? <span></span> : null
                        }
                    </div>
                </div>
            </div>
            <div className={style.hrtag}></div>
        </div>
    )
}
