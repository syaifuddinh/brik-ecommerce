import { createSlice } from '@reduxjs/toolkit'

export const product = createSlice({
  name: 'product',
  initialState: {
    list: [],
    page: 1
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.list = payload
    },
    setPage: (state, { payload }) => {
      state.page = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts, setPage } = product.actions

export default product.reducer