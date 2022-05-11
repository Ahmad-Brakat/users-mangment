import { combineReducers } from "redux";
import usersReducer from './reducer'
const rootReducer = combineReducers({
    users: usersReducer,
    user: usersReducer,
    looding: usersReducer,
    imageHeager: usersReducer,
    imageAvatar: usersReducer
}) 
export default rootReducer