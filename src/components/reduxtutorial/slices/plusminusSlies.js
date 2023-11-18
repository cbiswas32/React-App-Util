import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
}

const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) =>{
            state.value += 1
        },
        decrement: (state) =>{
            state.value -= 1
        },
        changeByAmount: (state,action) =>{
            switch(action.payload.sign){
                case 'plus':  
                    state.value += action.payload.amount;
                    break;
                case 'minus': state.value -= action.payload.amount;
                    break;
            }
        },

    }


})

export const {increment, decrement, changeByAmount} = countSlice.actions;

export default countSlice.reducer;