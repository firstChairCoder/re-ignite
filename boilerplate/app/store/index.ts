import { PayloadAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth.slice";

const allReducers = combineReducers({
 auth: authReducer
})

const rootReducer = (state: any, action: PayloadAction) => {
	if (action.type === 'auth/logout') {
		state = undefined;
	}

	return allReducers(state, action)
}

export const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;