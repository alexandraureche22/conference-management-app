const { Paper, Review, User } = require('../models')

const createPaper = async (req, res) => {
  try {
    const { title, abstract, fileUrl, conferenceId, authorId } = req.body

    // 1. Cream articolul
    const paper = await Paper.create({
      title,
      abstract,
      fileUrl,
      conferenceId,
      authorId,
      status: 'IN_REVIEW'
    })

    // 2. Gasim 2 revieweri
    const reviewers = await User.findAll({
      where: { role: 'REVIEWER' },
      limit: 2
    })

    if (reviewers.length < 2) {
      return res.status(400).json({
        message: 'Not enough reviewers available'
      })
    }

    // 3. Cream review-uri automate
    await Review.bulkCreate([
      {
        paperId: paper.id,
        reviewerId: reviewers[0].id,
        decision: 'PENDING',
        feedback: ''
      },
      {
        paperId: paper.id,
        reviewerId: reviewers[1].id,
        decision: 'PENDING',
        feedback: ''
      }
    ])

    res.status(201).json({
      message: 'Paper submitted and reviewers auto-assigned',
      paperId: paper.id
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}


const getPapers = async (req, res) => {
  try {
    const papers = await Paper.findAll({
      include: [
        { model: User, attributes: ['id', 'name'], foreignKey: 'authorId' },
        { model: Review }
      ]
    })
    res.json(papers)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}


const getPaperById = async (req, res) => {
  try {
    const paper = await Paper.findByPk(req.params.id)
    if (!paper) return res.status(404).json({ message: 'Paper not found' })
    res.json(paper)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updatePaper = async (req, res) => {
  try {
    const paper = await Paper.findByPk(req.params.id)
    if (!paper) return res.status(404).json({ message: 'Paper not found' })

    await paper.update(req.body)
    res.json(paper)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const resubmitPaper = async (req, res) => {
  try {
    const { id } = req.params
    const { abstract, fileUrl } = req.body

    const paper = await Paper.findByPk(id)
    if (!paper) {
      return res.status(404).json({ message: 'Paper not found' })
    }

    paper.abstract = abstract
    paper.fileUrl = fileUrl
    paper.status = 'IN_REVIEW'

    await paper.save()

    res.json({
      message: 'Paper resubmitted',
      paper
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}


module.exports = {
  createPaper,
  getPapers,
  getPaperById,
  updatePaper,
  resubmitPaper
}
