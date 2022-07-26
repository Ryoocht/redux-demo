import { ActionType } from '../../assets/enums/counterEnum'
import { Dispatch } from 'redux'
import { Action } from '../../assets/types/counterType'

export const incrementCount = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.INCREMENT,
            payload: amount
        })
    }
}

export const decrementCount = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DECREMENT,
            payload: amount
        })
    }
}

export const incrementByAmountCount = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.INCREMENT_BY_AMOUNT,
            payload: amount
        })
    }
}

export const addFreeNumber = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_FREE_NUMBER,
            payload: amount
        })
    }
}