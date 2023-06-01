import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { loginUserApi,autoLoginUserApi } from '../api/User';

export const USER_STATUS = {
    loggedin : "loggedin",
    loggedout : "loggedout",
    waiting : "waiting"
}

const initialState = {
    username: '',
    email: "",
    accessToken: '',
    status : ""
};

export const loginUser = createAsyncThunk(
    'user/login',
    loginUserApi
);

export const autoLoginUser = createAsyncThunk(
    'user/autologin',
    autoLoginUserApi
)

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        updateToken : ()=>{

        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.status = USER_STATUS.waiting;
        })
        .addCase(loginUser.fulfilled, (state,{ payload })=>{
            // console.log('payload',payload);
            state.email = payload.email;
            state.username = payload.username;
            state.accessToken = payload.accessToken;
            state.status = USER_STATUS.loggedin;
        })
        .addCase(loginUser.rejected,(state)=>{
            console.log('rejected');
            state.status = USER_STATUS.loggedout; 
        })
    }
});

export default userSlice.reducer;
export const {

} = userSlice.actions;