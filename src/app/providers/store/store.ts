import { configureStore } from "@reduxjs/toolkit"

import { userReducer } from "@entities/user"
import { breadcrumbsReducer } from "@shared/model"

export const makeStore = () => {
	return configureStore({
		reducer: {
			user: userReducer,
			breadcrumbs: breadcrumbsReducer,
		},
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
