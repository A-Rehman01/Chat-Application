import { Feedback } from '@material-ui/icons';
import { auth, firestore } from 'firebase';


export async function Logout(uid) {
    var Feedback = {
        type: true
    }
    const db = firestore();
    await db.collection('user')
        .doc(uid)
        .update({
            isOnline: false
        }).then(async function () {
            console.log('Offline')
            await auth().signOut()
                .then(() => {
                    localStorage.clear();
                    console.log('Logout Sucessfully...')
                })
                .catch((err) => {
                    console.log(err)
                })
        }).catch((err) => {
            console.log(err)
        })
    return await Feedback;
}