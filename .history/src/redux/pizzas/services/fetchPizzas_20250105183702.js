import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas", 
    async (_, thunkAPI) => {
        // const {} = thunkAPI
        try {
            const response = await axios.get(`${__API__}/pizzas`)
        } catch (error) {
            
        }
    }
)
