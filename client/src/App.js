import axios from 'axios';
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard';
import store from './store';


class App extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('_ID')) {
      axios.get(`/api/users/${localStorage.getItem('_ID')}`)
      .then(res => {
        store.dispatch({
          user: res.data.user,
          type: 'set_user'
        })
      }).catch(err => {
        console.log(err);
      })
    }
  }
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
