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

    render() {
        return (
            <div className="createquiz-wrapper">
                <div>
                    <Navbar />
                </div>
                <div className="main">
                    <div className="header">Create a Quiz</div>
                    <div className="form card">
                        <input type="text" />
                    </div>
                </div>
            </div>
        )
    }
}