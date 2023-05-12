const router = require('express').Router(); 
const answers = require('../api/answers.json');

router.get('/', async(req, res) => {
    try {
        res.status(200).json({
            message: `Answers obtained: `,
            results: answers
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        });    
    }
}); 

module.exports = router; 