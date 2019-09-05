import React from 'react'
import Welcome from './Routes/Home'
import Week1 from './Routes/Week1'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/week1/:index?" component={Week1} />
        <Route path="/" exact component={Welcome} />
      </Router>
    </div>
  )
}

export default App
