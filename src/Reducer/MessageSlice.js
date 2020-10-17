import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const MessageListData = createAsyncThunk(
    'getmessagelistfromapi',
    async (data, thunkapi) => {
        console.log("Think data user list => ", data)
        return await data;
    }
)

export const MessageSlice = createSlice({
    name: 'messagelist',
    initialState: {
        message: [],
        isloading: true,
    },

    reducers: {

    },
    extraReducers: {
        [MessageListData.fulfilled]: (state, action) => {
            console.log('fullfild')
            console.log(action.payload)
            state.message = action.payload
            state.isloading = false
        },
        [MessageListData.reject]: (state, action) => {
            console.log('API Rejected');
        },
        [MessageListData.pending]: (state, action) => {
            console.log('pending')
        },
    }
})

export const { } = MessageSlice.actions;

export const messagelist = (state) => {
    return ({
        messagelist: state.messagelist.message,
        loading: state.messagelist.isloading
    })
}

export default MessageSlice.reducer;