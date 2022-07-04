import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export const oldCounterStore = createStore(
    reducers, 
    composeWithDevTools(
        applyMiddleware(thunk),
    )
)