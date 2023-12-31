import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder } from './CheckoutApi';

const initialState = {
  orderItems: [],
  status: 'idle',
  orderDetail: null,

};

export const createOrderAsync = createAsyncThunk(
  'checkOut/createOrder',
  async (orderItems) => {


    console.log("my order detail issue " + orderItems)
    const response = await createOrder(orderItems);
    console.log(response)
    return response.data;
  }
);

export const checkOutSlice = createSlice({
  name: 'checkOut',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    resetCheckout: (state) => {
      state.orderDetail = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orderDetail = action.payload;
        state.orderItems.push(action.payload);
        const item = action.payload
        // console.log(item)
      });
  },
});

export const { increment  ,resetCheckout} = checkOutSlice.actions;
export  const selectOrderDetail =  (state) =>  state.checkOut.orderDetail
export default checkOutSlice.reducer;