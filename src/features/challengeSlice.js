import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { addNewChallengeApi, deleteChallengeApi, getAllChallengesApi } from '../api/Challenge';

const initialState = {
    count : 0,
    challenges : []
}

export const getAllChallenges = createAsyncThunk(
    'challenge/getall',
    getAllChallengesApi
)

export const addNewChallenge = createAsyncThunk(
    'challenge/add',
    addNewChallengeApi
)

export const deleteChallenge = createAsyncThunk(
    'challege/delete',
    deleteChallengeApi
)

const challengeSlice = createSlice({
    name : 'challenge',
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{
        builder
        .addCase(getAllChallenges.fulfilled,(state,{payload})=>{
            // console.log(payload);
            state.count += payload.length;
            state.challenges = [...state.challenges,...payload];
        })
        .addCase(addNewChallenge.fulfilled,(state,{ payload })=>{
            state.count++;
            state.challenges.push({...payload.challenge,solved : 0});
        })
        .addCase(deleteChallenge.fulfilled,(state,{ payload })=>{
            state.challenges = state.challenges.filter(elem=>elem.id!==payload.id);
        })
    }
});

export default challengeSlice.reducer;
export const {

} = challengeSlice.actions;