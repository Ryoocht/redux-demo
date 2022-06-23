import React from 'react'
import './App.css'
import OldCounter from './features/oldCounter/OldCounter' 
import Counter from './features/counter/Counter'
import NewCounter from './features/newCounter/NewCounter'

const App = () => {
  return (
    <div className="App">
      {/* <OldCounter /> */}
      <NewCounter />
      {/* <Counter /> */}
    </div>
  )
}

export default App
