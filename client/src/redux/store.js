import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { charactersReducer } from "./slices/characters";

const store = configureStore({
    reducer: {
        auth: authReducer,
        characters: charactersReducer,
    }
});

export { store };