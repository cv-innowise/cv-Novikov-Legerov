import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface UserState {
	id: string | null
	email: string | null
	role: string | null
}

const initialState: UserState = {
	id: null,
	email: null,
	role: null,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserState>) => ({
			...state,
			...action.payload,
		}),
	},
})

export const userReducer = userSlice.reducer
export const userAction = userSlice.actions
