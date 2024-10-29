
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart', 
  initialState,
  reducers: {
    cartlist: (state, action) => {
      state.value = action.payload
      
    },
  },
})

export const { cartlist } = cartSlice.actions

export default cartSlice.reducer 
