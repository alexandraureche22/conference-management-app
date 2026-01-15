const { Review, Paper } = require('../models')

const createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body)
    res.status(201).json(review)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      include: [
        {
          model: Paper,
          attributes: ['id', 'title', 'status']
        }
      ]
    })
    res.json(reviews)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getReviewsByPaper = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { paperId: req.params.paperId }
    })
    res.json(reviews)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateReview = async (req, res) => {
  try {
    const { id } = req.params
    const { decision, feedback } = req.body

    const review = await Review.findByPk(id)
    if (!review) {
      return res.status(404).json({ message: 'Review not found' })
    }

    review.decision = decision
    review.feedback = feedback
    await review.save()

    // luăm DOAR review-urile acestui paper
    const reviews = await Review.findAll({
      where: { paperId: review.paperId }
    })

    let paperStatus = 'IN_REVIEW'

    if (reviews.some(r => r.decision === 'REJECT')) {
      paperStatus = 'REJECTED'
    } else if (reviews.every(r => r.decision === 'APPROVE')) {
      paperStatus = 'ACCEPTED'
    }

    await Paper.update(
      { status: paperStatus },
      { where: { id: review.paperId } }
    )

    res.json({
      message: 'Review updated',
      paperStatus
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
}


module.exports = {
  createReview,
  getReviews,
  getReviewsByPaper,
  updateReview
}
