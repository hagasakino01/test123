import { createSlice } from "@reduxjs/toolkit";
import API from "../../Service/API";


const initialState ={
    listYourPost: [],
    yourPost:{}

}
export const yourPostSlice = createSlice({
    name: 'yourPost',
    initialState,
    reducers:{
       
        addYourPost:(state, action)=>{
            state.listYourPost.push(action.payload)

        },
        getYourPost:(state, action)=>{
            state.listYourPost= action.payload
        },
       
    }
})
export const{fixYourPost , delYourPost, getYourPost , setYourPost, addYourPost} = yourPostSlice.actions;
export default yourPostSlice.reducer;