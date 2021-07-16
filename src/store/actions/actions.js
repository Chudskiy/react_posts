import {CREATE_POST, DELETE_POST, FETCH_POSTS, FETCH_USER, GET_POST, SIGNUP} from "./actionTypes";
import api from "../../api";

export const signupAsync = (payload) => {
    return async (dispatch) => {
        await api.signup(payload)
            .then(res => {
                dispatch(signup(res.data));
            })
            .then(error => {
                console.log('error = ', error);
            })
    }
};

export const signup = (user) => {
    return {
        type: SIGNUP,
        payload: user,
    }
};

export const fetchUserAsync = () => {
    return async (dispatch) => {
        await api.me()
            .then(res => {
                dispatch(fetchUser(res.data));
            })
            .then(error => {
                console.log('error = ', error);
            })
    }
};

export const fetchUser = (user) => {
    return {
        type: FETCH_USER,
        payload: user,
    }
};


export const createPostAsync = (payload) => {
    return async (dispatch) => {
        await api.createPost(payload)
            .then(res => {
                // console.log('success response = ', res);
                dispatch(createPost(res.data));
            })
            .then(error => {
                console.log('error = ', error);
            })
    }
};

export const createPost = (post) => {
    return {
        type: CREATE_POST,
        payload: post,
    }
};


export const fetchPostsAsync = () => {
    return async (dispatch) => {
        await api.getPosts()
            .then(res => {
                dispatch(getPosts(res.data));
            })
            .then(error => {
                console.log('error = ', error);
            })
    };
};

export const getPosts = (posts) => {
    return {
        type: FETCH_POSTS,
        payload: posts,
    }
};


export const getPostAsync = (postId) => {
    return async (dispatch) => {
        await api.getPost(postId)
            .then(res => {
                dispatch(getPost(res.data));
            })
            .then(error => {
                console.error(error);
            })
    };
};

export const getPost = (post) => {
    return {
        type: GET_POST,
        payload: post,
    }
};


export const deletePostAsync = (postId) => {
    return async (dispatch) => {
        await api.deletePost(postId)
            .then(res => {
                dispatch(deletePost(postId));
            })
            .then(error => {
                console.error(error);
            })
    }
};

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        payload: postId,
    }
};


export const likeAsync = (postId, likeType) => {
    return async (dispatch) => {
        await api.addLike(postId, likeType)
            .then(res => {
                console.log('success response = ', res)
            })
            .then(error => {
                console.error(error);
            })
    }
};

export const dislikeAsync = (postId, likeType) => {
    console.log('postId, payload = ', postId, likeType)
    return async (dispatch) => {
        await api.addLike(postId, likeType)
            .then(res => {
                console.log('success response = ', res)
                // dispatch(addLike(postId, payload));
            })
            .then(error => {
                console.log('error = ', error);
            })
    }
};

// export const addLike = (postId, likeType) => {
    // return {
//         type: DELETE_POST,
//         payload: postId, likeType,
//     }
// };

