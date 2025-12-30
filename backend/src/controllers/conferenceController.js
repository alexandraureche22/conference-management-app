const { Conference, Paper, User, Review } = require('../models')

const createConference = async (req, res) => {
  try {
    const conf = await Conference.create(req.body)
    res.status(201).json(conf)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getConferences = async (req, res) => {
  try {
    const confs = await Conference.findAll()
    res.json(confs)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getConferenceById = async (req, res) => {
  try {
    const conf = await Conference.findByPk(req.params.id)
    if (!conf) return res.status(404).json({ message: 'Conference not found' })
    res.json(conf)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateConference = async (req, res) => {
  try {
    const conf = await Conference.findByPk(req.params.id)
    if (!conf) return res.status(404).json({ message: 'Conference not found' })

    await conf.update(req.body)
    res.json(conf)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getConferencePapers = async (req, res) => {
  try {
    const { id } = req.params

    const conference = await Conference.findByPk(id, {
      include: [
        {
          model: Paper,
          include: [
            {
              model: User,
              attributes: ['id', 'name', 'email'],
              foreignKey: 'authorId'
            },
            {
              model: Review,
              attributes: ['id', 'decision', 'feedback', 'reviewerId']
            }
          ]
        }
      ]
    })

    if (!conference) {
      return res.status(404).json({ message: 'Conference not found' })
    }

    res.json({
      conferenceId: conference.id,
      conferenceTitle: conference.title,
      papers: conference.Papers
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  createConference,
  getConferences,
  getConferenceById,
  updateConference,
  getConferencePapers
}
