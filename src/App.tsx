import React from 'react'
import './App.css'
import OldCounter from './features/oldCounter/OldCounter' 
import NewCounter from './features/newCounter/NewCounter'
import AdvancedCounter from './features/advancedCounter/AdvancedCounter'

const App = () => {
  return (
    <div className="App">
      {/* <OldCounter /> */}
      {/* <NewCounter /> */}
      <AdvancedCounter />
    </div>
  )
}

export default App
