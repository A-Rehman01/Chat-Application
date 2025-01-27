import { auth, firestore } from 'firebase';

export async function SiginIn(user) {
    var feedback = {
        firstName: '',
        lastName: '',
        uid: '',
        email: '',
        err: null,
        onRefresh: false,
        type: false
    };


    await auth().signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            const db = firestore();
            db.collection('user')
            .doc(data.user.uid)
            .update({
                isOnline: true
            }).then(async function () {
                console.log('Online')
            }).catch((err) => {
                console.log(err)
            })

            console.log(data);
            const name = data.user.displayName.split(' ');
            const firstName = name[0]
            const lastName = name[1]
            const loggedInUser = {
                firstName,
                lastName,
                uid: data.user.uid,
                email: data.user.email
            }
            localStorage.setItem('user', JSON.stringify(loggedInUser))
            feedback.firstName = firstName
            feedback.lastName = lastName
            feedback.uid = data.user.uid
            feedback.email = data.user.email
            console.log('Signin Sucessfully....')
             

        })
        .catch((err) => {
            console.log(err)
            feedback.err = err.message
        })
    return await feedback;
} 