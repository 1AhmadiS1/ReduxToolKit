import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
name:"counter"
,
initialState:{
value:0,
},
reducers:{
    increment:(state)=>{
        state.value+=1
    },
    decrement:(state)=>{
state.value-=1

    },
    incrementByval:(state,action)=>{
state.value+=action.payload
    },
    refreshCounting:(state)=>{
        state.value=0
    }
}


})
export const {increment,decrement,incrementByval,refreshCounting}=CounterSlice.actions
export default CounterSlice.reducer


