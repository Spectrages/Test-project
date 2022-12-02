import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { checkboxReducer } from './slices/checkbox'
import { charactersReducer } from "./slices/characters";

const store = configureStore({
    reducer: {
        auth: authReducer,
        characters: charactersReducer,
        checkbox: checkboxReducer,
    }
});

export { store };