import { ActionType } from '../../assets/enums/counterEnum'
import { Action } from '../../assets/types/counterType'

const initialState = 0

const oldCounterReducer = (state: number = initialState, action: Action) => {
    const count = state
    switch (action.type) {
        case ActionType.INCREMENT:
            if (count < 0)
                return state = 0
            else
                return state + action.payload
        case ActionType.DECREMENT: 
            if (count === 0)
                return state = 0
            else
                return state - action.payload
        case ActionType.INCREMENT_BY_AMOUNT:
            return state += action.payload
        case ActionType.ADD_FREE_NUMBER:
            return state += action.payload
        default:
            return state
    }
}

export default oldCounterReducer