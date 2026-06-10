import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isSuccess: false
}

export const submitTicket = createAsyncThunk('submitTicket', async (data) => {
    const response = await axios.post('http://10.50.126.107:3000/transactions',
        JSON.stringify(data), {
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    return response.data
})
const bookTicketSlice = createSlice({
    name: 'bookTicket',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitTicket.pending, (state) => {
                state.isSuccess = false;
            })
            .addCase(submitTicket.fulfilled, (state, action) => {
                state.isSuccess = true;
            })
            .addCase(submitTicket.rejected, (state, action) => {
                state.isSuccess = false;
            })
    }
})

export default bookTicketSlice.reducer;