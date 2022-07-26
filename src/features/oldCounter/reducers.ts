import { combineReducers } from 'redux'
import oldCounterReducer from './oldCounterReducer'

const reducers = combineReducers({
    oldCounter: oldCounterReducer,
})

export default reducers

export type State = ReturnType<typeof reducers>