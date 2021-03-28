import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {usersReducer} from "./usersReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
});
