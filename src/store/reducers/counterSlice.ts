import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import { access } from 'fs'

export interface CounterState {
value: number,
todo: Array<string>,
completed: boolean,
}

const initialState: CounterState = {
value: 0,
todo: [],
completed: false,

}

export const counterSlice = createSlice({
name: 'counter',
initialState,
reducers: {
increment: (state) => {
state.value += 1
},
decrement: (state) => {
state.value -= 1
},
incrementByAmount: (state, action: PayloadAction<number>) => {
state.value += action.payload
},
//dd
addTodo: (state, action: PayloadAction<string>) => {
state.todo.push(action.payload)
state.completed = false

},
deleteTodo: (state, action: PayloadAction<number>) => {
state.todo = state.todo.filter((_, index) => index !== action.payload)

state.completed = false
},
}
})

export const { increment, addTodo, deleteTodo, incrementByAmount, decrement } = counterSlice.actions

export  const counterReducer =  counterSlice.reducer