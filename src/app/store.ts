import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import terminalReducer from "../components/Terminal/terminalSlice"
import launchpadReducer from "../components/Launchpad/launchpadSlice"
import notesSlice from "../components/Notes/notesSlice"


export const store = configureStore({
  reducer: {
    terminal: terminalReducer,
    launchpad: launchpadReducer,
    notes: notesSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>