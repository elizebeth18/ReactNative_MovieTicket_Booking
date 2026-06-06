import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    movies: [],
    errorMsg: null,
}

export const moviesListThunk = createAsyncThunk('fetchMoviesList', async() => {

    const response = await axios.get('http://10.50.126.107:3000/movies');
    //console.log(response)
    return response.data;
});

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(moviesListThunk.pending,(state, action) => {
            state.isLoading = true;
            state.movies = [];
            state.errorMsg = null;
        });
        builder.addCase(moviesListThunk.fulfilled,(state,action) => {
            state.isLoading = false;
            state.movies = [...action.payload];
        })
        builder.addCase(moviesListThunk.rejected,(state, action) => {
            state.isLoading = false;
            state.errorMsg = action.error?.message
        })
    }
});

export default movieSlice.reducer;
