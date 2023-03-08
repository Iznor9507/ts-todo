import { configureStore } from "@reduxjs/toolkit"
import { counterReducer } from "./reducers/counterSlice"



export const store = configureStore({
 reducer: {
conter: counterReducer

}
})



export type RootState = ReturnType<typeof  store.getState>
// export type AppStore = ReturnType<typeof setupStore>
  export type AppDispatch = typeof store.dispatch
// export type AppDispatch = AppStore['dispatch']