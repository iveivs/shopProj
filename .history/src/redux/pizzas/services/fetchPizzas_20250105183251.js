import { createAsyncThunk } from "@reduxjs/toolkit";



const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas", 
    async ()
)
