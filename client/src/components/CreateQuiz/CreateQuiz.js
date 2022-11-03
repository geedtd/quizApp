import React from 'react'
import './CreateQuiz.css'
import Navbar from '../Navbar/Navbar'
import Dialog from '../Dialog/Dialog'
import axios from 'axios'

export default class CreateQuiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: ['Math', 'Science', 'History'],
            categoryVal: 'Math',
            mustBeSignedIn: false,
            questions: [],
            name: '',
            addQuestions: false,
            answers: [],
            correctAnswer: ''
        }
    }

    selectPrivate = e => {
        if(e.target.checked === true) {
            this.setState({
                mustBeSignedIn: e.target.checked
            })
        } else {
            this.setState({mustBeSignedIn: false})
        }
    }

    render() {
        return (
            <div className="createquiz-wrapper">
                <div>
                    <Navbar />
                </div>
                <div className="main">
                    <div className="header">Create a Quiz</div>
                    <div className="form card">
                        <input type='text' className='input' onChange={e => this.setState({name: e.target.value})} value={this.state.name} placeholder='Enter Quiz Name'/>
                        <br></br>
                        <select 
                            className='input select' 
                            value={this.state.categoryVal} 
                            onChange={ e => this.setState({categoryVal: e.target.value})}
                            placeholder=''
                        >
                            <option disabled value=''>Select Category</option>
                            {this.state.categories.map((cat, idx) => (
                                <option key={idx} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <div className="checkbox">
                            <span>User Must Be Logged In To Take</span>
                            <input 
                                type="checkbox"
                                placeholder='Must Be Logged In To Take'
                                checked={this.state.mustBeSignedIn}
                                onChange={this.selectPrivate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}