import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import AuthSlice from '../Reducer/authSlice'
import SigninSlice from '../Reducer/signinSlice'
import UserlistSlice from '../Reducer/UserlistSlice'
import MessageSlice from '../Reducer/MessageSlice';
import MessageViewSlice from '../Reducer/MessageView'

// const middleware = getDefaultMiddleware();
export const ChatStore = configureStore({
    
    reducer: {
        auth: AuthSlice,
        signin: SigninSlice,
        userlist:UserlistSlice, 
        messagelist:MessageSlice,
        messageview:MessageViewSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
