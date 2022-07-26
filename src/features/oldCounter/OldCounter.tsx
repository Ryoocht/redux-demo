import { useState } from 'react'
import * as actionCreators from './oldCounterActionCreators'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { State } from './reducers'
import { InputChangeEventHandler } from '../../Types/reactTypes'

const OldCounter = () => {
  const [ countNumber, setCountNumber ] = useState(1)
  const count = useSelector((state: State) => state.oldCounter)
  const dispatch = useDispatch()
  const { 
    incrementCount, 
    decrementCount, 
    incrementByAmountCount,
    addFreeNumber
  } = bindActionCreators(actionCreators, dispatch)

  const handleChange:InputChangeEventHandler = ({ target }) => {
    setCountNumber(parseInt(target.value))
  }

  return (
    <div>
      <p className='counter_title'>Old Counter</p>
      <div className='counter_container'>
        <button
          onClick={() => decrementCount(countNumber)}
          className='counter_btn'
        >
          -
        </button>
        <span className='count'>
          {count}
        </span>
        <button
          onClick={() => incrementCount(countNumber)}
          className='counter_btn'
        >
          +
        </button>
      </div>

      <div className='counter_extra_container'>
        <button
          onClick={() => incrementByAmountCount(count)}
          className='counter_multiply'
        >
          Add {count}
        </button>
        <div
          onClick={() => addFreeNumber(countNumber)}
          className='counter_free_text'
        >
          <span>Add</span>
          <input 
            type={'number'}  
            className='free_text_input'
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='total_price_container'>
        <p>Add to Order</p>
        <p>${count * 20}</p>
      </div>
    </div>
  )
}

export default OldCounter