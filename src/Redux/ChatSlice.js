import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Register } from '../Services/Register'

export const InitialData = createAsyncThunk(
    'getdatafromapi',
    async (data, thunkapi) => {
        console.log("Think data => ", data)
        let response = await Register(data)
        console.log("Responese =>", response)
        return await response;
    }
)

export const ChatSlice = createSlice({
    name: 'chat',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        authenticating: false,
        authenticated: false,
        error: null,
        uid: ''
    },
    isloading: false,
    reducers: {

        LoginRequest: (state, action) => {
            console.log('LoginRequest......')
            console.log(action)
            return {
                ...state,
            }
        },
    },
    extraReducers: {
        [InitialData.fulfilled]: (state, action) => {
            console.log(action.payload.err)
            console.log('fullfild')
            
            state.error = action.payload.err;
            if(state.error === null){
                state.authenticated = true
            }
            else{
                state.authenticated = false
            }
            state.authenticating = false;
            state.email=action.payload.email;
            state.firstName=action.payload.firstName;
            state.lastName=action.payload.lastName;
            state.uid = action.payload.uid;
        },
        [InitialData.reject]: (state, action) => {
            console.log('API Rejected');
        },
        [InitialData.pending]: (state, action) => {
            console.log('pending')
            state.authenticating = true;
            console.log(action)
        },
    }
})

export const { LoginRequest } = ChatSlice.actions;

export const chatData = (state) => {
    return ({
        firstName: state.chat.firstName,
        lastName: state.chat.lastName,
        email: state.chat.email,
        uid: state.chat.uid,
        authenticating: state.chat.authenticating,
        authenticated: state.chat.authenticated,
        error: state.chat.error
    })
}

export default ChatSlice.reducer;