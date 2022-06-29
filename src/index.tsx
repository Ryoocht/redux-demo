import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { oldCounterStore } from './features/oldCounter/oldCounterStore'
import { newCounterStore } from './features/newCounter/newCounterStore'
import { advancedStore } from './app/advancedStore'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>

    {/* <Provider store={oldCounterStore}> */}
    {/* <Provider store={newCounterStore}> */}
    <Provider store={advancedStore}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
