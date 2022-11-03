import React from 'react'
import store from '../../store/index'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends React.Component{

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        if (store.getState().user) {
            return (
                <div className="navbar-wrapper">
                    <div className="header">Quiz Time</div> 
                    <div className="user">
                        <div className="name">{store.getState().user.firstName + ' ' + store.getState().user.lastName}</div>
                    </div>
                    <div className="links">
                        <NavLink to='/dashboard'><div className="link">Dashboard</div></NavLink>
                        <NavLink to='/account'><div className="link">Account</div></NavLink>
                        <NavLink to='/my-quizzes'><div className="link">My Quizzes</div></NavLink>
                        <NavLink to='/create-quiz'><div className="link">Create Quiz</div></NavLink>
                    </div>
                </div>
            )
        } else {
            return (
                <div>...Loading</div>
            )
        }
    }
}