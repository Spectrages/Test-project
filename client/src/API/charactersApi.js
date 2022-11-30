import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCharacters = createAsyncThunk('character/fetchCharacter', () => {
    return axios.get(`https://rickandmortyapi.com/api/character`)
        .then(response => response.data)
        .catch(error => console.error(error))
});