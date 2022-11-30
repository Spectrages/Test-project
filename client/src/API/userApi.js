import axios from "../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async () => {
    const { data } = await axios.get('/auth/me');
    return data;
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    const { data } = await axios.post('/auth/register', params);
    return data;
});