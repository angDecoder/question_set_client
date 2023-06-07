import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteQuestionApi, getAllQuestionApi } from '../api/Question';

const initialState = {
    list : []
}
/*
    {
        challenge_id : 'adlkj',
        count : 10,
        questionList : [
            {
                "id": "26c7bc0e-8539-4946-bb58-db7bfc4fd1e2",
            "title": "third question",
            "tags": ["new","question","added"],
            "solved": false
            }
        ]
    }

 */

export const getAllQuestion = createAsyncThunk(
    'question/getall',
    getAllQuestionApi
);

export const deleteQuestion = createAsyncThunk(
    'question/delete',
    deleteQuestionApi
)

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(deleteQuestion.fulfilled,(state,{ payload })=>{
            const { question_id,challenge_id } = payload;
            state.list = state.list.map(elem=>{
                if( elem.challenge_id===challenge_id ){
                    elem.questionList = elem.questionList.filter(item=>item.id!==question_id);
                }

                return elem;
            })
        })
        .addCase(getAllQuestion.fulfilled,(state,{ payload })=>{
            console.log(payload);
            const { id,questions } = payload;
            let found = false;
            state.list = state.list.map(elem=>{
                if( elem.challenge_id!==id )
                    return elem;
                found = true;
                elem.count += questions.length
                elem.questionList = [...state.questionList,...questions];
            });

            if( !found ){
                console.log('here');
                state.list.push({
                    challenge_id : id,
                    count : questions.length,
                    questionList : questions
                })
            }
            // state[`${payload.id}`].questionList = payload.questions;
        })        
    }
});

export const {

} = questionSlice.actions;

export const getQuestionById = (state,id)=>{
}

export default questionSlice.reducer;