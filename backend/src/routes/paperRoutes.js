const express = require('express')
const router = express.Router()

const {
  createPaper,
  getPapers,
  getPaperById,
  updatePaper,
  resubmitPaper
} = require('../controllers/paperController')

// CREATE paper (Submit Paper)
router.post('/', createPaper)

// GET all papers
router.get('/', getPapers)

// GET paper by id
router.get('/:id', getPaperById)

// UPDATE paper
router.put('/:id', updatePaper)

// RESUBMIT paper
router.put('/:id/resubmit', resubmitPaper)

module.exports = router
