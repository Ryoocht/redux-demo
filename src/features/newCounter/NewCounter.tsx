import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from './newCounterHook'
import { 
    selectCount, 
    increment, 
    decrement, 
    incrementByAmount 
} from './newCounterSlice'

const NewCounter = () => {
    const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')

    const incrementValue = Number(incrementAmount) || 0
    
    return (
        <div>
            <p>New Counter</p>
            <div>
                <button
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span>{count}</span>
                <button
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <button
                    onClick={(e) => dispatch(incrementByAmount(count))}
                >
                    Add {count}
                </button>
            </div>
        </div>
    )
}

export default NewCounter