import { auth, firestore } from 'firebase';

export async function Register(user) {
    var feedback = {
        firstName: '',
        lastName: '',
        uid: '',
        email: '',
        err: null
    };
    const db = firestore();
    await auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            console.log(data)
            // feedback.result = user
            feedback.firstName = user.fname
            feedback.lastName = user.lname
            feedback.uid = data.user.uid
            feedback.email = user.email
            const currentUser = auth().currentUser;
            var name = `${user.fname}${user.lname}`
            currentUser.updateProfile({
                displayName: name
            })
                .then(() => {
                    // if you here successfuly nme updated
                    db.collection('user').add({
                        firstName: user.fname,
                        lastName: user.lname,
                        uid: data.user.uid,
                        createdAt: new Date()
                    })
                        .then(() => {
                            //successfull
                            const loggedInUser = {
                                firstName: user.fname,
                                lastName: user.lname,
                                uid: data.user.uid,
                                email: user.email
                            }
                            // localStorage.setItem('user', JSON.stringify(loggedInUser))
                            console.log('Signup Sucessfully....')
                        })
                        .catch((error) => {
                            console.log(error)
                            return error.message
                        })

                })

        }).catch((error) => {
            feedback.err = error.message
        })

    return await feedback;
}

