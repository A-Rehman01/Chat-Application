export async function IsloggedinUser() {
    var feedback = {
        firstName: '',
        lastName: '',
        uid: '',
        email: '',
        err: null,
        onRefresh: true,
    };
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    console.log(user)
    if (user) {
        feedback.firstName = user.firstName;
        feedback.lastName = user.lastName;
        feedback.uid = user.uid;
        feedback.email = user.email;
    }
    else {
        feedback.err = 'Please Signup first'
    }
    return await feedback;
}