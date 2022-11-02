import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard';


class App extends React.Component {
  render() {
    return ( 
      <div className="app">
      <Router>
        <Routes>
          <Route exact path='/' element={<Auth/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
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
