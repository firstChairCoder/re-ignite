import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { mmkvStorage } from "app/utils/storage"

import type { AuthState } from "./types"

const initialState: AuthState = {
  token: undefined
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // getToken: () => {},
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      mmkvStorage.set("access-token", action.payload)
    },
    logOut: () => {
      mmkvStorage.clearAll()
      mmkvStorage.set("isFirstTime", false)
    }
  }
})

export const { setToken, logOut } = authSlice.actions
export const authReducer = authSlice.reducer
