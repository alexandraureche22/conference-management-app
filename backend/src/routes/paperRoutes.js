<<<<<<< HEAD
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
=======
const router = require('express').Router()
const p = require('../controllers/paperController')

router.post('/', p.createPaper)
router.get('/', p.getPapers)
router.get('/:id', p.getPaperById)
router.put('/:id', p.updatePaper)
router.put('/:id/resubmit', p.resubmitPaper)
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407

module.exports = router
