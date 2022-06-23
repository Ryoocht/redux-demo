import React from 'react'
import './App.css'
import OldCounter from './features/oldCounter/OldCounter' 
import Counter from './features/counter/Counter'

const App = () => {
  return (
    <div className="App">
      <OldCounter />
      {/* <Counter /> */}
    </div>
  )
}

export default App
