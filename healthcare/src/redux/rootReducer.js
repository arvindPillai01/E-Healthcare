import {combineReducers} from "redux";
import taskReducer from "./taskReducer";
import userReducer from './userReducer'; 
import adminReducer from "./adminReducer";
import cartReducer from "./cartReducer";


const rootReducer = combineReducers({
    task: taskReducer,
    user: userReducer,
    admin:adminReducer,
    cart:cartReducer,
});

export default rootReducer