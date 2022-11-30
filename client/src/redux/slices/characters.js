import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "../../API/charactersApi";

const initialState = {
    characters: {
        items: [],
        status: 'loading'
    },
};

const postsSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCharacters.pending]: (state) => {
            state.characters.items = [];
            state.characters.status = 'loading';
        },
        [fetchCharacters.fulfilled]: (state, action) => {
            state.characters.items = action.payload;
            state.characters.status = 'loaded';
        },
        [fetchCharacters.rejected]: (state) => {
            state.characters.items = [];
            state.characters.status = 'error';
        },
    }
});

export const charactersReducer = postsSlice.reducer;