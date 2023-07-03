import { createSlice, configureStore } from "@reduxjs/toolkit"

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    decrement(state) {
      state.counter--
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    },
  },
})

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         counter: state.counter + 1,
//       }

//     case INCREASE:
//       return {
//         ...state,
//         counter: state.counter + action.amount,
//       }

//     case DECREMENT:
//       return {
//         ...state,
//         counter: state.counter - 1,
//       }

//     case TOGGLE:
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       }

//     default:
//       return state
//   }
// }

const store = configureStore({
  reducer: counterSlice.reducer,
})

export const counterActions = counterSlice.actions
export default store
