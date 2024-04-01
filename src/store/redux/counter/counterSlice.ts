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
    //1 аргумент - state - текущее состояние хранилища
    //2 аргумент - action
    add: create.reducer((state: CounterSliceState) => {
      state.count = state.count + 1
    }),
  }),
})
