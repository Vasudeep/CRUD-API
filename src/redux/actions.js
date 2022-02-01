import * as types from './actionType';
import axios from "axios";

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const userDeleted = (id) => ({
    type: types.DELETE_USERS,
    payload: id,  
});

const userAdded = (users) => ({
    type: types.ADD_USERS, 
    payload: users,
})

const userViewed = (id) => ({
    type: types.VIEW_USERS,
    payload: id,
})

export const loadUsers = () => {
    console.log(process.env.REACT_APP_API)
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}`)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(getUsers(resp.data));
                
            })
            .catch((error) => console.log(error));
    };
};

export const deleteUser = (_id) => {
    console.log(process.env.REACT_APP_API)
    return function (dispatch) {
        axios
            .delete(`${process.env.REACT_APP_API}/${_id}`)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(userDeleted(_id));
                
            })
            .catch((error) => console.log(error));
    };
};

export const addUser = (user) => {
    console.log(process.env.REACT_APP_API)
    return function (dispatch) {
        axios
            .post(`${process.env.REACT_APP_API}`, user)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(userAdded(resp.data));
                
            })
            .catch((error) => console.log(error));
    };
};

export const viewUser = (_id) => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}/${_id}`)
            .then((resp) => {
                console.log("View data", resp);
                dispatch(userViewed(resp.data));
                
            })
            .catch((error) => console.log(error));
    };
};



