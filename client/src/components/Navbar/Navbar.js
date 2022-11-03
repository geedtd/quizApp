import React from 'react'
import store from '../../store/index'
import './Navbar.css'

export default class Navbar extends React.Component{

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <div>Hello</div>
        )
    }
}