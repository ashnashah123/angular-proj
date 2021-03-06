const quizService = require('../services/quiz.service.client')
module.exports = function(app) {
    // TODO: is this supposed to be req or res?
    app.get('/api/quizzes', (req, res) => {
        res.send(quizService.findAllQuizzes())
    })
    app.get('/api/quizzes/:qid', (req, res) => {
        const quizId = req.params['qid']
        const quiz = quizService.findQuizById(quizId)
        res.json(quiz)
    })
}
