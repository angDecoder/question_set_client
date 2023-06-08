import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import { getSolutionApi,setSolutionApi } from '../api/Solution'

const initialState = {
    list : []
};

export const getSolution = createAsyncThunk(
    'solution/get',
    getSolutionApi
)

export const setSolution = async()=>{
    setSolutionApi
}

const solutionSlice = createSlice({
    name : 'solution',
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{

    }
});

export const {

} = solutionSlice.actions;

export default solutionSlice.reducer;