import { ActionType } from '../../assets/enums/counterEnum'
import { Action } from '../../assets/types/counterType'

const initialState = 0

const oldCounterReducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.INCREMENT:
            return state + action.payload
        case ActionType.DECREMENT:
            return state - action.payload
        case ActionType.INCREMENT_BY_AMOUNT:
            return state += action.payload
        default:
            return state
    }
}

export default oldCounterReducer