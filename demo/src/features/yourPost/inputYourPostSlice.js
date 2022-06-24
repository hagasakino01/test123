import { createSlice } from "@reduxjs/toolkit";
import API from "../../Service/API";


const initialState ={
    idImg : '',
    inputYourPost : ""


}
export const inputYourPostSlice = createSlice({
    name: 'inputYourPost',
    initialState,
    reducers:{
       
        setImg:(state, action)=>{
            state.idImg= action.payload

        },
       
        setInput:(state, action)=>{
            state.inputYourPost= action.payload

        },
        
    }
})
export const{ setImg,  setInput } = inputYourPostSlice.actions;
export default inputYourPostSlice.reducer;

