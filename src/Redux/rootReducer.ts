import { combineReducers } from '@reduxjs/toolkit';
import { UserSlice, userFeatureKey } from './User/User.reducer';



const rootReducer = combineReducers({
    [userFeatureKey]:UserSlice.reducer,

});

export default rootReducer;