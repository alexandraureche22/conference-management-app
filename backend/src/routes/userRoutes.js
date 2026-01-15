const express = require('express')
const router = express.Router()

const {
  getReviewers,
  createAuthor,
  getAuthors
} = require('../controllers/userController')

router.get('/reviewers', getReviewers)
router.post('/authors', createAuthor)
router.get('/authors', getAuthors)

module.exports = router
