import React, { useState } from 'react'
import { InputChangeEventHandler } from '../../Types/reactTypes'
import { useAppSelector, useAppDispatch } from './newCounterHook'
import { 
    selectCount, 
    increment, 
    decrement, 
    incrementByAmount 
} from './newCounterSlice'

const NewCounter = () => {
    const [ countNumber, setCountNumber ] = useState(1)
    const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()

    const handleChange:InputChangeEventHandler = ({ target }) => {
        setCountNumber(parseInt(target.value))
    }

    return (
        <div>
            <p className='counter_title'>New Counter</p>
            <div className='counter_container'>
                <button
                onClick={() => dispatch(decrement)}
                className='counter_btn'
                >
                -
                </button>
                <span className='count'>
                    {count}
                </span>
                <button
                onClick={() => dispatch(increment)}
                className='counter_btn'
                >
                +
                </button>
            </div>

            <div className='counter_extra_container'>
                <button
                onClick={() => dispatch(incrementByAmount)}
                className='counter_multiply'
                >
                Add {count}
                </button>
                <div
                // onClick={() => dispatch()}
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

export default NewCounter