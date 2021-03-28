import {CREATE_POST, DELETE_POST, FETCH_POSTS, GET_POST} from "../actions/actionTypes";
import produce from "immer";

const initialState = {
    posts: {
        byId: {},
        allIds: [],
    },
    currentPost: {}
}


export const postsReducer = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case CREATE_POST:
            const nextState = produce(newState, draftState => {
                draftState.posts.byId[action.payload.id] = action.payload;
                draftState.posts.allIds.push(action.payload.id);
            })

            return nextState;


        case FETCH_POSTS:
            const fetchPostsState = produce(newState, draftState => {
                action.payload.forEach(post =>
                    draftState.posts.byId[post.id] = post
                );

                draftState.posts.allIds = action.payload.map(post => post.id);
            });

            return fetchPostsState;


        case GET_POST:
            const getPostState = produce(newState, draftState => {
                draftState.currentPost = action.payload;
            });

            return getPostState;


        case DELETE_POST:
            const deletePostState = produce(newState, draftState => {

                delete draftState.posts.byId[action.payload];
                    draftState.posts.allIds = draftState.posts.allIds.filter(id => id !== action.payload.id);
            });

            return deletePostState;


        default:
            return newState;
    }
}


// action.payload.forEach(post =>
//     newState.posts.byId[post.id] = post
// );
// newState.posts.allIds = action.payload.map(post => post.id);


//     action.payload.forEach((post) => (
//         newState.posts.byId[post.id] = post,
//             [...newState.posts.allIds, post.id]
//             // newState.posts.allIds = [...newState.posts.allIds, post.id]
//             // newState.posts.allIds.push(post.id)
//     ));
//
//     console.log('new state in fetch = ', state)

