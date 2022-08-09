import axios from "axios";
import { useNavigate } from "react-router-dom";



// Actions
const LOAD = 'kurly/user/LOAD';
const SET = 'kurly/user/SET';
const UPDATE = 'kurly/user/UPDATE';
const REMOVE = 'kurly/user/REMOVE';

const initialState = {
    is_loaded: false,
    list: [],
};


// Action Creators
export function loadUser(food_list) {
return { type: LOAD, food_list};
}

export function setUser(widget) {
return { type: SET, widget };
}

export function updateUser(widget) {
return { type: UPDATE, widget };
}

export function removeUser(widget) {
return { type: REMOVE, widget };
}

// Middleware
// export const signUpDB = async (dispatch,formData) => {
//     console.log(formData)
//     // await axios
    
//     //     .post('http://localhost:5001/list',formData)
//     //     .then((response) => {
//     //         console.log(response)
//     //         window.alert("회원가입이 완료되었습니다.")           
//     //     })
//     //     .catch((error) => {
//     //         console.log(error)
//     //         window.alert("에러!")
//     //     })
//     return async function ( dispatch )
// }

export const signUpDB = (formData) => {
    return async function (dispatch) {   
        await axios
    .post('http://13.125.151.93/user/signup',formData)
    .then((response) => {
        console.log(response)
       window.alert("회원가입이 완료되었습니다.")
       console.log(formData)

    })
    .catch((error) => {
       console.log(error.response.data)
        window.alert("에러!")
   })
        console.log(formData)
    };
};

export const loginDB = (formData) => {
    return async function (dispatch) {   
        console.log(formData)
        await axios
    .post('http://13.125.151.93/user/login',formData)
    .then((response) => {
        console.log(response)
        window.alert(`${formData.loginId}님 환영합니다!`)
        localStorage.setItem("token", response.data.jwt);
    })
    .catch((error) => {
       console.log(error)
        window.alert(error.response.data.message)
   })
    };
};

export const idCheckDB = (formData) => {
    return async function (dispatch) {   
        console.log(formData)
        await axios
    .post('http://13.125.151.93/user/idcheck',formData)
    .then((response) => {
        console.log(response)
        window.alert("사용가능한 아이디 입니다!")
    })
    .catch((error) => {
       console.log(error.response.data.message)
        window.alert("에러!")
   })
    };
};




// Reducer
export default function reducer(state = {}, action = {}) {
    switch (action.type) {
    case LOAD : {
        // return {loginId: }
    }
    
    default: return state;
    }
    }
