import React from 'react'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }

    render() {
        return (
            <div className="sign-in-wrapper">
                <div className="form">
                <div className="input-wrapper">
                    <div>First Name</div>
                    <input type="text" name="firstName" placeholder='Enter your First Name' value={this.state.firstName} onChange={ e => this.setState({firstName: e.target.value})} />
                </div>
                <div className="input-wrapper">
                    <div>Last Name</div>
                    <input type="text" name='lastName' placeholder='Enter your Last Name' value={this.state.lastName} onChange={ e => this.setState({lastName: e.target.value})}/>
                </div>
                <div className="input-wrapper">
                    <div>Email Address</div>
                    <input type="text" className="text" placeholder='Email Address' value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                </div>
                <div className="input-wrapper">
                    <div>Password</div>
                    <input type="password" className="password" placeholder='Enter your Password' value={this.state.password} onChange={ e => this.setState({password: e.target.value})}/>
                </div>
                <div className="btn input" onClick={() => this.props.signin(...this.state)}>
                    Sign Up
                </div>
                </div>
            </div>
        )
    }
}