import * as types from './actionType';

const initialState = {
    users: [],
    user: {},
    looding: true,
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                looding: false
            };
        case types.DELETE_USER: 
        case types.ADD_USER:
        case types.UPDATE_USER:

            return {
                ...state,
                looding: false
            }
        default:
            return state;
    }
}
export default usersReducer