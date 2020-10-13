import { Feedback } from '@material-ui/icons';
import { auth, firestore } from 'firebase';

export async function Logout() {
   var Feedback = {
    type : true
   }
    await auth().signOut()
        .then(() => {
            localStorage.clear();
            console.log('Logout Sucessfully...')
        })
        .catch((err) => {
            console.log(err)
        })
    return await Feedback;    
}