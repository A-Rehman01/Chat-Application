import { auth, firestore } from 'firebase';
import { UserListData } from '../Reducer/UserlistSlice';
import {useDispatch} from 'react-redux'

export async function UserList() {
    var feedback = {
        list:[]
    }
    // const dispatch = useDispatch();    
    const db = firestore();
   await  db.collection('user')
        // .where()
        .onSnapshot(  function (data)  {
            const user = [];
            data.forEach((obj) => {
                user.push(obj.data());
            })
            feedback.list=user
            console.log(user)
        })
    return feedback
}
