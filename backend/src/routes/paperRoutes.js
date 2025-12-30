const router = require('express').Router()
const p = require('../controllers/paperController')

router.post('/', p.createPaper)
router.get('/', p.getPapers)
router.get('/:id', p.getPaperById)
router.put('/:id', p.updatePaper)
router.put('/:id/resubmit', p.resubmitPaper)

module.exports = router
