import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { mmkvStorage } from "app/utils/storage";

const initialState: AuthState = {
	token: undefined
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
			mmkvStorage.set('access-token', action.payload)
		},
		logOut: () => {
			mmkvStorage.clearAll();
			mmkvStorage.set('isFirstTime', false)
		}
	}
})

export const {setToken, logOut} = authSlice.actions
export const authReducer = authSlice.reducer;