import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
	productCout: number
}

const initialState: CounterState = {
	productCout: 0,
}

export const ProductsSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.productCout += 1
		},
		decrement: state => {
			state.productCout -= 1
		},
		removeProduct: state => {
			state.productCout += 1
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.productCout += action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = ProductsSlice.actions

export default ProductsSlice.reducer
