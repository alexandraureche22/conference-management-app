const router = require('express').Router()
const r = require('../controllers/reviewController')

router.post('/', r.createReview)
router.get('/', r.getReviews)
router.get('/paper/:paperId', r.getReviewsByPaper)
router.put('/:id', r.updateReview)

module.exports = router
