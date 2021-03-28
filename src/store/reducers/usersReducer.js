import { FETCH_USER, SIGNUP} from "../actions/actionTypes";

const initialState = {users: {byId: {}, allIds: []}, currentUser: {}}

export const usersReducer = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case SIGNUP:
            newState.users.byId[action.payload.id] = action.payload;
            newState.users.allIds.push(action.payload.id);

            return newState;

        case FETCH_USER:
            newState.currentUser = action.payload;

            return newState;






        default:
            return newState;

    }
}
