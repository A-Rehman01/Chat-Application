import { auth, firestore } from 'firebase';

export async function Message (msgObj){
    const db = firestore();
    db.collection('conversation')
    .add({
        ...msgObj,
        isView: false,
        createdAt: new Date(),
    })
    .then((data)=>{
        console.log('AddMsg',data)
    })
    .catch((err)=>{
        console.log(err)
    })
}