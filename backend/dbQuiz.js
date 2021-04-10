const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema({
    questionNumber: String,
    question: String,
    questionOptions: [
        {option: String}
    ]
});

module.exports = mongoose.model("Quiz", QuizSchema);