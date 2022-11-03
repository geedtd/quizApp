const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuizSchema = new Schema({
    mustBeSignedIn: {
        type: Boolean,
        default: false  
    },
    name: {
        type: String,
        required: true
    },
    questions: [{
        type: Object,
        contains: {
            answers: {type: Array},
            correctAnswer: String,
            questionName: String
        }
    }],
    category: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    deleted: {
        type: Boolean,
        default: false
    }
})

module.exports = Quiz = mongoose.model('Quizzes', QuizSchema)