import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { BreadcrumbItem } from "@shared/types"

export interface BreadcrumbsState {
	config: BreadcrumbItem[]
}

const initialState: BreadcrumbsState = {
	config: [],
}

const breadcrumbsSlice = createSlice({
	name: "breadcrumbs",
	initialState,
	reducers: {
		updateBreadcrumb: (state, action: PayloadAction<BreadcrumbItem>) => {
			const index = state.config.findIndex(
				(item) => item.path === action.payload.path,
			)
			if (index >= 0) {
				state.config[index] = action.payload
			} else {
				state.config.push(action.payload)
			}
		},
		clearBreadcrumbs: (state) => {
			state.config = []
		},
	},
})

export const breadcrumbsReducer = breadcrumbsSlice.reducer
export const breadcrumbsAction = breadcrumbsSlice.actions
