// import { useState } from "react"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counter/counterSlice"
import Button from "components/Button/Button"
// import { CounterProps } from "./types"
import { CounterWrapper, ButtonControl, Count } from "./styles"
//react component - Counter
function Counter() {
  ///////////////////////////////////////////////////////////////////////////////////////////////
  //удалил пропсы с типизацией
  // const [count, setCount] = useState<number>(0)

  // const onPlus = () => {
  //   setCount(prevValue => prevValue + 1)
  // }

  // const onMinus = () => {
  //   setCount(prevValue => prevValue - 1)
  // }

  // const onMultiply = () => {
  //   setCount(prevValue => Number((prevValue * 2).toFixed(2)))
  // }

  // const onDivide = () => {
  //   setCount(prevValue => Number((prevValue / 2).toFixed(2)))
  // }
  ///////////////////////////////////////////////////////////////////////////////////////////////

  const dispatch = useAppDispatch()
  const count = useAppSelector(counterSliceSelectors.count)

  const onPlus = () => {
    dispatch(counterSliceActions.add())
  }

  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(5))
  }

  const onDivide = () => {
    dispatch(counterSliceActions.divide(10))
  }

  //react element ButtonControl
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="/" onClick={onDivide} />
      </ButtonControl>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      <ButtonControl>
        <Button name="*" onClick={onMultiply} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter
