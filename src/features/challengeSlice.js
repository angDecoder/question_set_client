import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { getAllChallengesApi } from '../api/Challenge';

const initialState = {

}

export const getAllChallenges = createAsyncThunk(
    'challenge/getall',
    getAllChallengesApi
)

const challengeSlice = createSlice({
    name : 'challenge',
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{

    }
});

export default challengeSlice.reducer;
export const {

} = challengeSlice.actions;