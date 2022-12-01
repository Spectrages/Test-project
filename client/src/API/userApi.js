import axios from "../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async () => {
    const { data } = await axios.get('/auth/me');
    return data;
});
