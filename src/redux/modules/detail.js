import axios from "axios";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { useParams } from "react-router";
import { connectStorageEmulator } from "firebase/storage";

export const getReview = createAsyncThunk("GET/getdetails", async () => {
    const { productId } = useParams();
    return  axios({
      method: "get",
      url: "http://13.125.151.93/comment/list/"+productId,
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
    
  });

  const detailSlice = createSlice({
    name:"detail",
    initialState:{
        list: [],
        error: "",
    },
    reducers: {},
    extraReducers: {
        [getReview.pending]: (state) => {
            state.loading = true;
            state.reviewInfo = [];
            state.error = "";
          },
        [getReview.fulfilled]: (state, action) => {
            console.log(action)
            state.reviewInfo = action.payload;
            state.loading = false;
            state.error = "";
          },
        [getReview.rejected]: (state, action) => {
            state.loading = false;
            state.reviewInfo = [];
            state.error = action.payload;
          }
    }
})

export const detailActions = detailSlice.actions
export default detailSlice.reducer