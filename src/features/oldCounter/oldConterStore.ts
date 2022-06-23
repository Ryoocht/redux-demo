import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

export const oldCounterStore = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)