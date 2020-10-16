import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../Reducer/authSlice'
import SigninSlice from '../Reducer/signinSlice'
import UserlistSlice from '../Reducer/UserlistSlice'

export const ChatStore = configureStore({
    reducer: {
        auth: AuthSlice,
        signin: SigninSlice,
        userlist:UserlistSlice, 
    }
})