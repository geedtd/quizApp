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
            addQuestion: false,
            answers: [],
            correctAnswer: '',
            questionName: ''
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

    removeQuestion = (question) => {
        this.setState({
            questions: this.setState.questions.filter(ques => ques.questionName !== question.questionName)
        })
    }

    saveQuiz = () => {
        let quiz = {
            mustBeSignedIn: this.state.mustBeSignedIn,
            name: this.state.name,
            questions: this.state.questions,
            category: this.state.categoryVal
        }
        axios.post('/api/quizzes/create', {quiz, createdBy: localStorage.getItem('_ID')})
        .then(res => {
            if (res.data.success) {
                this.setState({
                    questions: [],
                    answers: [],
                    categoryVal: 'Math'
                })
            }
        }).catch (err => {
            console.log(err);
        })
    }

    updateAnswer = (e , i) => {
        let newArr = Object.assign([], this.state.answers)
        newArr[i] = e.target.value
        this.setState({
            answers: newArr
        })
    }

    addAnswer = () => {
        this.setState({
            answers: this.state.answers.concat('')
        })
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

                        {this.state.questions.map((ques, idx) => (
                            <div className="question" key={idx}>
                                <div>{ques.questionName}</div>
                                <div>Correct Answer: {ques.correctAnswer}</div>
                                <div>Number of Answers: {ques.answers.length}</div>
                                <span className="btn delete" onClick={() => this.removeQuestion(ques)}>Delete</span>
                            </div>
                        ))}

                        <div className="question">
                            <div className="add-question" onClick={() => this.setState({addQuestion: true})}>Add Question</div>
                        </div>

                        <span className='btn save-quiz' onClick={()=> this.saveQuiz()} >Save Quiz</span>

                        <Dialog model={this.state.addQuestion}>
                            <div className="new-question-form">
                                <input 
                                    className='input' 
                                    placeholder='Question' 
                                    value={this.state.questionName}
                                    onChange={e => this.setState({questionName: e.target.value})}        
                                />
                                <div>Answers</div> 
                                {this.state.answers.map((ans, idx) => (
                                    <div className="answer-form" key={idx}>
                                        <input 
                                            type="radio"
                                            value={this.state.ans}
                                            onChange={e => this.setState({correctAnswer: ans})}
                                            name="answer"
                                        />
                                        <input
                                            className='input' 
                                            type="text" 
                                            placeholder='Answer'
                                            value={this.state.answers[idx]}
                                            onChange={e => this.updateAnswer(e, idx)}
                                        />
                                    </div>
                                ))} 
                                <div className="add-answer" onClick={this.addAnswer}>Add Answer</div>
                                <div className="btn-wrapper">
                                    <div className="btn" onClick={() => this.setState({addQuestion: false})}>Close</div>
                                    <div className="btn" onClick={this.saveQuestion}>Save</div>
                                </div>
                            </div>

                        </Dialog>
                        
                    </div>
                </div>
            </div>
        )
    }
}