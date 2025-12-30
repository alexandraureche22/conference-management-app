const router = require('express').Router()
const c = require('../controllers/conferenceController')

router.post('/', c.createConference)
router.get('/', c.getConferences)
router.get('/:id', c.getConferenceById)
router.put('/:id', c.updateConference)
//monitorizare organizator
router.get('/:id/papers', c.getConferencePapers)

module.exports = router
