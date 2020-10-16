import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { UserList } from '../Services/UserList'
export const UserListData = createAsyncThunk(
    'getUserlistfromapi',
    async (data, thunkapi) => {
        console.log("Think data user list => ", data)
        return await data;
    }
)

export const UserlistSlice = createSlice({
    name: 'userlist',
    initialState: {
        user: [],
        isloading: true,
    },

    reducers: {

    },
    extraReducers: {
        [UserListData.fulfilled]: (state, action) => {
            console.log('fullfild')
            console.log(action.payload)
            state.user = action.payload
            state.isloading = false
        },
        [UserListData.reject]: (state, action) => {
            console.log('API Rejected');
        },
        [UserListData.pending]: (state, action) => {
            console.log('pending')
        },
    }
})

export const { } = UserlistSlice.actions;

export const userlist = (state) => {
    return ({
        userList: state.userlist.user,
        loading: state.userlist.isloading
    })
}

export default UserlistSlice.reducer;