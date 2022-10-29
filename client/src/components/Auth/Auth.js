import React from 'react'
import SignUp from './Signup'
import SignIn from './Signin'

export default class Auth extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tab: 'signin'
        }
    }

    render() {
        let page = this.state.tab === 'signin' ? <SignIn/> : <SignUp/>
        return (
            <div className="auth-wrapper">
                <div className="left">

                </div>
                <div className="right">
                    <div className="header">Quiz App V1</div>
                    <div className="sub-header">Get ready to ace your quiz!</div>
                </div>
            </div>
        )
    }

}