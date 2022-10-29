import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Auth from './components/Auth/Auth'


class App extends React.Component {
  render() {
    return ( 
      <div class="app">
      <Router>
        <Routes>
          <Route exact path='/' element={<Auth/>}/>
          <Route 
            path='*'
            element={<Navigate to='/' replace/>}
          />
        </Routes>
      </Router>

      </div>
    )
  }
}

export default App;
