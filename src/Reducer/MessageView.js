import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const MessageViewData = createAsyncThunk(
    'getmessageviewfromapi',
    async (data, thunkapi) => {
        console.log("respponse msgview => ", data)
        return await data;
    }
)

export const MessageViewSlice = createSlice({
    name: 'messageview',
    initialState: {
        View: [],
        isloading: true,
    },

    reducers: {

    },
    extraReducers: {
        [MessageViewData.fulfilled]: (state, action) => {
            console.log('fullfild')
            console.log(action.payload)
            state.View = action.payload
            state.isloading = false
        },
        [MessageViewData.reject]: (state, action) => {
            console.log('API Rejected');
        },
        [MessageViewData.pending]: (state, action) => {
            console.log('pending')
        },
    }
})

export const { } = MessageViewSlice.actions;

export const messageviewData = (state) => {
    return ({
        messageview: state.messageview.View,
        loading: state.messageview.isloading
    })
}

export default MessageViewSlice.reducer;