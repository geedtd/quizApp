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
        axios.post('api/users/login', {email, password})
        .then(res => {
            console.log(res);
            if(res.data.success) {
                localStorage.setItem('JWT_PAYLOAD', res.data.token)
                localStorage.setItem('_ID', res.data.user._id)
            }
        }).catch(err => {
            console.log(err);
        })
    }

    signUp = ({firstName, lastName, email, password }) => {
        axios.post('api/users/register', {firstName, lastName, email, password})
        .then(res => {
            console.log(res.data);
            if (res.data.success) {
                this.setState({tab: 'signin'})
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        let page = this.state.tab === 'signin' ? <SignIn signIn={this.signIn}/> : <SignUp signUp={this.signUp}/>
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