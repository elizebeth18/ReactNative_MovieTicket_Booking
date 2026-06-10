import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './moviesSlice';
import bookTicketReducer from './bookTicketSlice';

export const store = configureStore({
    reducer: {
        moviesR: moviesReducer,
        bookTicket: bookTicketReducer
    }
});