import React from 'react'
import SignUp from './Signup'
import SignIn from './Signin'
import axios from 'axios'
import './Auth.css' 

export default class Auth extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tab: 'signin'
        }
    }

    signIn = (email, password) => {
        console.log(email, password);
    }

    signUp = (firstName, lastName, email, password ) => {
        
    }

    render() {
        let page = this.state.tab === 'signin' ? <SignIn signIn={this.state.signIn}/> : <SignUp signUp={this.state.signUp}/>
        return (
            <div className="auth-wrapper">
                <div className="left">

                </div>
                <div className="right">
                    <div className="header">Quiz App V1</div>
                    <div className="sub-header">Get ready to ace your quiz!</div>
                    {page}
                    <div className="new" onClick={() => (this.state.tab === 'signin') ? this.setState({tab: 'signup'}) : this.setState({tab: 'signin'})}> New User? Click here to Sign Up</div>
                </div>
            </div>
        )
    }

}