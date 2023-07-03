import { createStore } from "redux"
import { createSlice } from "@reduxjs/toolkit"

export const INCREMENT = "INCREMENT"
export const INCREASE = "INCREASE"
export const DECREMENT = "DECREMENT"
export const TOGGLE = "TOGGLE"

const initialState = { counter: 0, showCounter: true }

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    increase(state, action) {
      state.counter = state.counter + action.amount
    },
    decrement(state) {
      state.counter--
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    },
  },
})

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      }

    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.amount,
      }

    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      }

    case TOGGLE:
      return {
        ...state,
        showCounter: !state.showCounter,
      }

    default:
      return state
  }
}

const store = createStore(counterReducer)

export default store
