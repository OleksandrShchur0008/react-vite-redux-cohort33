import { useState } from "react"
import Counter from "../../components/Counter/Counter"

import { Homework29Wrapper } from "./styles"

function Homework29() {
  // const [count, setCount] = useState<number>(0)

  // const onPlus = () => {
  //   setCount(prevValue => prevValue + 1)
  // }

  // const onMinus = () => {
  //   setCount(prevValue => prevValue - 1)
  // }

  return (
    <Homework29Wrapper>
      <Counter />
    </Homework29Wrapper>
  )
}

export default Homework29
