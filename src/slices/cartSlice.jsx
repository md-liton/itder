
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cart', 
  initialState,
  reducers: {
    cartlist: (state, action) => {
      state.value = action.payload
      console.log(state.value);
      console.log(action.payload);
      
    },
  },
})

export const { cartlist } = cartSlice.actions

export default cartSlice.reducer 
