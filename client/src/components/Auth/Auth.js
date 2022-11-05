import React from 'react'
import SignUp from './Signup'
import SignIn from './Signin'
import axios from 'axios'
import store from '../../store/index'
import { withRouter } from '../withRouter'
import './Auth.css' 

class Auth extends React.Component {

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
                store.dispatch({
                    type: 'login',
                    _id: res.data.user._id,
                    user: res.data.user,
                    token: res.data.token
                })
                console.log(store.getState());
                this.props.navigate('/dashboard')
            }
        }).catch(err => {
            console.log(err);
        })
    }

    signUp = ({firstName, lastName, email, password, teacher }) => {
        axios.post('api/users/register', {firstName, lastName, email, password, teacher})
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

export default withRouter(Auth)