import { createSlice } from "@reduxjs/toolkit"
// import { RootState } from "../../app/store"


export interface LaunchpadState {
  value: boolean
}

const initialState: LaunchpadState = {
  value: false,

}

export const launchpadSlice = createSlice({
  name: "launchpad",
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



export const { open, close } = launchpadSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value


export default launchpadSlice.reducer