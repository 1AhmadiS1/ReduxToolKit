import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByval, refreshCounting } from '../RTK/CounterSlice/CounterSlice'

function Counter() {
const val=useSelector(state=>state.counter.value)
const dispatch=useDispatch()
const amount=useRef()

const incrementby1=()=>{
dispatch(increment())

}
const decrementby1=()=>{
    dispatch(decrement())


}
const incrementbyval=(e)=>{
    e.preventDefault()
    const realval=parseInt(amount.current.value,10)
    dispatch(incrementByval(realval))
}
const refreshcounting=()=>{
dispatch(refreshCounting())
amount.current.value=0

}


  return (
    <div>

        <button onClick={incrementby1}>increase</button>
        <button onClick={decrementby1}>decrease</button>
<div>{val}</div>
<form onSubmit={incrementbyval}>
        <input type="text" ref={amount} />
        <button type="submit">Increase by {amount.current?.value||"?"}</button>
      </form>
      <button onClick={refreshcounting}>refresh </button>
    </div>
  )
}

export default Counter
