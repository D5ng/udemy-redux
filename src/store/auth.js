import { createSlice } from "@reduxjs/toolkit"

const initialtAuthState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: "authentication",
  initialState: initialtAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    },
  },
})

export const authActions = authSlice.actions
export default authSlice.reducer
