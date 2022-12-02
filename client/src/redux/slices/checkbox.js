import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    check: true
};

const checkboxSlice = createSlice( {
    name: 'checkbox',
    initialState,
    reducers: {
        changeTrue(state) {
            state.check = true;
        },
        changeFalse(state) {
            state.check = false;
        },
    }
})

export const checkboxReducer =  checkboxSlice.reducer;
export const { changeTrue, changeFalse } = checkboxSlice.actions;