import React from 'react'

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className="sign-in-wrapper">
                <div className="form">
                <div className="input-wrapper">
                    <div>Email Address</div>
                    <input type="text" className="text" placeholder='Email Address' value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                </div>
                <div className="input-wrapper">
                    <div>Password</div>
                    <input type="password" className="password" placeholder='Enter your Password' value={this.state.password} onChange={ e => this.setState({password: e.target.value})}/>
                </div>
                <div className="btn input" onClick={() => this.props.signIn(this.state.email, this.state.password)}>
                    Sign In
                </div>
                </div>
            </div>
        )
    }
}