import axios from "axios";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
// Actions
const LOAD = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

const initialState = {
    productList: [{
    "id": 1,
    "title": "타이틀",
    "imgUrl": "https://firebasestorage.googleapis.com/v0/b/magazine-40b77.appspot.com/o/images%2F%EC%95%84%EC%9D%B4%EC%9C%A0.jpg?alt=media&token=70b1c5be-268d-41e9-bc71-91de9b1ec11c",
    "price": 10000
    }
        
    ]
    
}


// Action Creators
export function loadProduct(product_list) {
return { type: LOAD, product_list };
}

export function createWidget(widget) {
return { type: CREATE, widget };
}

export function updateWidget(widget) {
return { type: UPDATE, widget };
}

export function removeWidget(widget) {
return { type: REMOVE, widget };
}

// Middleware

// export const loadProductDB = () => {
//     return async function (dispatch) {   
//         await axios
//     .get('http://localhost:5001/list')
//     .then((response) => {
//         console.log(response)
//         dispatch(loadProduct(response.data))
//     })
//     .catch((error) => {
//        console.log(error)
//         window.alert("에러!")
//    })
    
//     };
// };

// Reducer
// export default function reducer(state = initialState, action = {}) {
//     console.log(action)
//     switch (action.type) {
//         case LOAD : {
//             return {product: [...state,action.product_list]}
//         }
//     default: return state;
//     }
// }

export const getPosts = createAsyncThunk("GET/getPosts", async () => {
    return  axios({
      method: "get",
      url: "http://13.125.151.93/product/main",
    }).then((response) => response.data);
    
  });

const productSlice = createSlice({
    name:"post",
    initialState:{
        list: [],
        error: "",
    },
    reducers: {},
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.loading = true;
            state.posts = [];
            state.error = "";
          },
        [getPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.loading = false;
            state.error = "";
          },
        [getPosts.rejected]: (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.payload;
          }
    }
})

// console.log(productSlice)
export const productActions = productSlice.actions
export default productSlice.reducer