import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../Reducer/authSlice'
import SigninSlice from '../Reducer/signinSlice'

export const ChatStore = configureStore({
    reducer: {
        auth: AuthSlice,
        signin: SigninSlice,
    }
})