import React, { useState } from 'react'
import * as actionCreators from './oldCounterActionCreators'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { State } from './reducers'

const OldCounter = () => {
  const [ countNumber, setCountNumber ] = useState(1)
  const count = useSelector((state: State) => state.oldCounter)
  const dispatch = useDispatch()
  const { incrementCount, decrementCount, incrementByAmountCount } = bindActionCreators(actionCreators, dispatch)

  return (
    <div>
      <p>Old Counter</p>
      <div>
        <button
          onClick={() => incrementCount(countNumber)}
        >
          +
        </button>
        <span>{count}</span>
        <button
          onClick={() => decrementCount(countNumber)}
        >
          -
        </button>
      </div>
      <button
        onClick={() => incrementByAmountCount(count)}
      >
        Add {count}
      </button>
    </div>
  )
}

export default OldCounter