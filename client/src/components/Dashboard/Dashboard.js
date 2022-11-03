import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Dashboard.css'

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-wrapper">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                <div className="top">
                    <div className="left">
                        <div className="header">LEFT Stats</div>
                    </div>
                    <div className="right">
                        <div className="header">RIGHT My Quizzes</div>
                    </div>
                </div>
                <div className="bottom">BOTTOM</div>
            </div>
            </div>
        )
    }
}