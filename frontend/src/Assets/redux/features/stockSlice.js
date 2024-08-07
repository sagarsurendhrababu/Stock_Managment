import { createSlice } from "@reduxjs/toolkit"

const stockSlice = createSlice({
    name:"stock",
    initalValue:{
        stock:[],
        loading:flase,
        error:null,
    },
    reducers:{
        fetchStockRequest:(state) => {
            state.loading = true;
        },
        fetchStockSucess: (state,action) => {
            state.loading = false;
            state.stock = action.payload;
        },
        fetchStockFailure:(state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addStockRequest:(state) => {
            state.loading = true;
        },
        addStockSucess: (state,action) => {
            state.loading = false;
            state.stock.push(action.payload);
        },
        addStockFailure:(state,action) => {
            state.loading = false;
            state.error = action.payload;
        },        
    }
})
export const {fetchStockRequest,
    fetchStockSucess,
    fetchStockFailure,
    addStockRequest,
    addStockSucess,
    addStockFailure} = stockSlice.actions;

export default stockSlice.reducer