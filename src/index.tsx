import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { oldCounterStore } from './features/oldCounter/oldConterStore'
import { store } from './app/store'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={oldCounterStore}>
      <App />
    </Provider>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
  </React.StrictMode>
)

reportWebVitals()
