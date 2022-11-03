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
            </div>
        )
    }
}