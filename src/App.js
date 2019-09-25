import React from 'react'
import Welcome from './Routes/Home'
import Week1 from './Routes/Week1'
import Week2 from './Routes/Week2'
import Week3 from './Routes/Week3'
import Syllabus from './Routes/Syllabus'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Welcome} />
        <Route path="/week1/:index?" component={Week1} />
        <Route path="/week2/:index?" component={Week2} />
        <Route path="/week3/:index?" component={Week3} />
        <Route path="/syllabus" exact component={Syllabus} />
      </Router>
    </div>
  )
}

export default App
