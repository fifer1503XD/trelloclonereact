
import {createStore, combineReducers, applyMiddleware} from "redux";
import boardReducer from "./reducers/boardReducer";
import authReducer from "./reducers/authReducer";
import listReducer from "./reducers/listReducer"

import thunk from "redux-thunk";
import logger from "redux-logger";
import cardReducer from "./reducers/cardReducer";

const rootReducer = combineReducers({board: boardReducer,auth: authReducer,list:listReducer,card:cardReducer});
// 
const store = createStore(rootReducer,applyMiddleware(thunk, logger));

export default store;
