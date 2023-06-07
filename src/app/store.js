import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import challengeReducer from '../features/challengeSlice';
import questionReducer from '../features/questionSlice';

const store = configureStore({
    reducer : {
        user : userReducer,
        challenge : challengeReducer,
        question : questionReducer
    }
});

export default store;