import { createSlice } from "@reduxjs/toolkit"
// import { RootState } from "../../app/store"


export interface TerminalState {
  value: boolean
}

const initialState: TerminalState = {
  value: false,

}

export const terminalSlice = createSlice({
  name: "terminal",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    open: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true
    },
    close: (state) => {
      state.value = false
    },
  },
})



export const { open, close } = terminalSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value


export default terminalSlice.reducer