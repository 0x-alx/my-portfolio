import { createSlice } from "@reduxjs/toolkit"
// import { RootState } from "../../app/store"


export interface NotesState {
  value: boolean
  activeNote: number
}

const initialState: NotesState = {
  value: false,
  activeNote: 0,

}

export const notesSlice = createSlice({
  name: "notes",
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
    setActiveNote: (state, action) => {
      state.activeNote = action.payload
    },
  },
})



export const { open, close, setActiveNote } = notesSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value


export default notesSlice.reducer