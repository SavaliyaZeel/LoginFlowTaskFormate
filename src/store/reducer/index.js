import { combineReducers } from "redux";

import getDataReducer from './getData';
import authReducer from './auth';

const rootReducer = combineReducers({
    getDataReducer,
    authReducer
});

export default rootReducer;