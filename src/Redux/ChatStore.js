import { configureStore } from '@reduxjs/toolkit'
import ChatSlice from './ChatSlice'

export const ChatStore = configureStore({
    reducer: {
        chat: ChatSlice
    }
})