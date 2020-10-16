import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { SiginIn } from '../Services/authSignIn'
import { Logout } from '../Services/Logout'

export const SignInInitialData = createAsyncThunk(
    'siginingetdatafromapi',
    async (data, thunkapi) => {
        console.log("Think data => ", data)
        if (data.onRefresh) {
            let response = data
            console.log("SiginIn Responese on refresh =>", response)
            return await response;
        }
        else if (data.logout === 'Logout') {
            let response = await Logout(data.uid);
            console.log("LogOut Responese =>", response)
            return await response;
        }
        else {
            let response = await SiginIn(data)
            console.log("SiginIn Responese =>", response)
            return await response;
        }
    }
)

export const SigninSlice = createSlice({
    name: 'signin',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        authenticating: false,
        authenticated: false,
        error: null,
        uid: '',
    },
    isloading: false,
    reducers: {
    },
    extraReducers: {
        [SignInInitialData.fulfilled]: (state, action) => {
            console.log('fullfild')
            if (action.payload.type) {
                console.log('logout...')
                state.authenticating = false;
                state.authenticated = false;
                state.email = ''
                state.firstName = '';
                state.lastName = '';
                state.uid = '';
            }
            else {
                console.log('Notlogout...')
                state.error = action.payload.err;
                if (state.error === null) {
                    state.authenticated = true
                }
                else {
                    state.authenticated = false
                }
                state.authenticating = false;
                state.email = action.payload.email;
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.uid = action.payload.uid;
            }

        },
        [SignInInitialData.reject]: (state, action) => {
            console.log('API Rejected');
        },
        [SignInInitialData.pending]: (state, action) => {
            console.log('pending')
            state.authenticating = true;
            console.log(action)
        },
    }
})

export const { } = SigninSlice.actions;

export const signinData = (state) => {
    return ({
        firstName: state.signin.firstName,
        lastName: state.signin.lastName,
        email: state.signin.email,
        uid: state.signin.uid,
        authenticating: state.signin.authenticating,
        authenticated: state.signin.authenticated,
        error: state.signin.error,
    })
}

export default SigninSlice.reducer;