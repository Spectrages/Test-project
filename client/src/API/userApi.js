import axios from "../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async () => {
    return axios.get('/auth/me')
        .then(response => response.data)
        .catch(error => console.log(error))
});
