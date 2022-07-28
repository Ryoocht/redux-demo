import { useState } from 'react'
import { OPTIONS } from '../../assets/arrays/options'
import { InputChangeEventHandler } from '../../Types/reactTypes'
import { useAppSelector, useAppDispatch } from './newCounterHook'
import { 
    selectCount, 
    increment, 
    decrement, 
    incrementByAmount,
    addFreeNumber,
    addOption,
    deleteOption,
    OptionState,
} from './newCounterSlice'

const NewCounter = () => {
    const [ countNumber, setCountNumber ] = useState(1)
    const { count, options } = useAppSelector(selectCount)
    const dispatch = useAppDispatch()
    const optionPrices = options?.map(option => option.price)
    const optionTotal = optionPrices?.reduce((total, price) => total + price, 0)

    const handleChange:InputChangeEventHandler = ({ target }) => {
        setCountNumber(parseInt(target.value))
    }

    const handleCheckBtn = (checked: boolean, option:OptionState) => {
        if (checked) dispatch(addOption(option))
        else dispatch(deleteOption(option.id))
    }

    return (
        <div>
            <p className='counter_title'>New Counter</p>
            <div className='counter_container'>
                <button
                    onClick={() => dispatch(decrement())}
                    className='counter_btn'
                >
                -
                </button>
                <span className='count'>
                    {count}
                </span>
                <button
                    onClick={() => dispatch(increment())}
                    className='counter_btn'
                >
                +
                </button>
            </div>

            <div className='counter_extra_container'>
                <button
                onClick={() => dispatch(incrementByAmount(count))}
                className='counter_multiply'
                >
                Add {count}
                </button>
                <div
                onClick={() => dispatch(addFreeNumber(countNumber))}
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
            
            <div className='option_container'>
            {OPTIONS.map(option => (
                <div className='option_row' key={option.id}>
                    <input 
                        type='checkbox' 
                        className='option_checkbox'
                        onChange={(e) => handleCheckBtn(e.target.checked, option)}
                    />
                    <div className='option_title_box'>
                        <p>{option.name}</p>
                        <p>+${option.price.toFixed(1)}</p>
                    </div>
                </div>
            ))}
            </div>

            <div className='total_price_container'>
                <p>Add to Order</p>
                <p>
                    ${optionTotal
                    ? (count * 20) + optionTotal
                    : count * 20
                    }
                </p>
            </div>
        </div>
    )
}

export default NewCounter