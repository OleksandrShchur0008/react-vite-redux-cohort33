import { PayloadAction } from "@reduxjs/toolkit"
//Импортируем чтобы создать новый slice
import { createAppSlice } from "store/createAppSlice"
import { CounterSliceState } from "./types"

const counterInitialState: CounterSliceState = {
  count: 0,
}

//функция которая возвращает новый слайс и принимает в качестве аргумента обьект
export const counterSlice = createAppSlice({
  //1. даем имя слайсу
  name: "COUNTER",
  //2. принимает обьект с парами ключ-значение, указаные ключ-значения будут по умолчанию
  initialState: counterInitialState,
  //3. функция которая создает редьюсеры(возвращает обьект редьюсеров)
  reducers: create => ({
    //создаем функцию (с помощью create.reducer) которая увеличивает счетчик на + 1
    //create.reducer - принимает в себя функцию коллбэк, которая имеет 2 аргумента
    // 1 аргумент - state - текущее состояние хранилища
    // 2 аргумент - action- это обьект из двух пар ключ-значения
    // первый ключ - type - это тип экшена
    // второй ключ - payload - то значение, которое мы передаем из компонента
    add: create.reducer((state: CounterSliceState) => {
      state.count += 1
    }),
    minus: create.reducer((state: CounterSliceState) => {
      state.count -= 1
    }),
    multiply: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
        state.count = Number((state.count * action.payload).toFixed(2))
      },
    ),
    divide: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
        state.count = Number((state.count / action.payload).toFixed(2))
      },
    ),
  }),
  //   3 аргумент - selectors позволяют забрать у компонента данные из хранилища
  selectors: {
    count: (state: CounterSliceState) => state.count,
  },
})

export const counterSliceActions = counterSlice.actions
export const counterSliceSelectors = counterSlice.selectors
