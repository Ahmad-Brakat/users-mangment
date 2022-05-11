import axios from 'axios';
import * as types from './actionType';


const getAllUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
})

const deleteUser = () => ({
    type: types.DELETE_USER,
})

const addUser = () => ({
    type: types.ADD_USER,
})
const updateUser = () => ({
    type: types.UPDATE_USER,
})

export const loadUsers = () => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}`)
            .then((resp) => {
                dispatch(getAllUsers(resp.data))
            })
            .catch((error) => console.log(error));
    };
}
export const usersDeleted = (id) => {
    return function (dispatch) {
        axios
            .delete(`${process.env.REACT_APP_API}/${id}`)
            .then((resp) => {
                dispatch(deleteUser());
                dispatch(loadUsers());
            })
            .catch((error) => console.log(error));
    };
}
export const userAdd = (user) => {
    return function (dispatch) {
        axios
            .post(`${process.env.REACT_APP_API}`, user)
            .then((resp) => {
                dispatch(addUser());
            })
            .catch((error) => console.log(error));
    };
} 
export const userUpdate = (user,id) => {
    return function (dispatch) {
        axios
            .put(`${process.env.REACT_APP_API}/${id}`, user)
            .then((resp) => {
                dispatch(updateUser());
            })
            .catch((error) => console.log(error));
    };
}