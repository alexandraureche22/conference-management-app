// src/controllers/reviewController.js
const { Review, Paper } = require('../models')

// Creează o nouă recenzie
const createReview = async (req, res) => {
  try {
    // req.body ar trebui să conțină paperId, reviewerId, decision, feedback
    const review = await Review.create(req.body)
    res.status(201).json(review)
  } catch (err) {
    // Eroare de server
    res.status(500).json({ error: err.message })
  }
}

// Returnează toate recenziile
const getReviews = async (req, res) => {
  try {
    // Găsește toate recenziile
    const reviews = await Review.findAll()
    res.json(reviews)
  } catch (err) {
    // Eroare de server
    res.status(500).json({ error: err.message })
  }
}


// Returnează recenziile pentru o lucrare specifică
const getReviewsByPaper = async (req, res) => {
  try {
    // Găsește recenziile după paperId
    const reviews = await Review.findAll({
      where: { paperId: req.params.paperId }
    })
    res.json(reviews)
  } catch (err) {
    // Eroare de server
    res.status(500).json({ error: err.message })
  }
}

// Actualizează o recenzie și verifică starea lucrării
const updateReview = async (req, res) => {
  try {
    // Extrage id-ul recenziei din parametrii și decizia/feedback din corpul cererii
    const { id } = req.params
    const { decision, feedback } = req.body
    // Găsește recenzia după ID
    const review = await Review.findByPk(id)
    if (!review) {
        // Daca recenzia nu exista, returneaza 404
      return res.status(404).json({ message: 'Review not found' })
    }
    // Actualizează decizia și feedback-ul
    review.decision = decision
    review.feedback = feedback
    await review.save()

    // verif toate review paper
    const reviews = await Review.findAll({
      where: { paperId: review.paperId }
    })
    // Determină starea lucrării pe baza recenziilor
    let paperStatus = 'IN_REVIEW'
    // Dacă există cel puțin o recenzie de REJECT, lucrarea este REJECTED
    if (reviews.some(r => r.decision === 'REJECT')) {
      paperStatus = 'REJECTED'
    } else if (reviews.every(r => r.decision === 'APPROVE')) {
      paperStatus = 'ACCEPTED'
    }
    // Actualizează starea lucrării
    await Paper.update(
      { status: paperStatus },
      { where: { id: review.paperId } }
    )
    // Returnează un mesaj de succes și starea lucrării
    res.json({
      message: 'Review updated',
      paperStatus
    })
  } catch (err) {
    // Eroare de server
    res.status(500).json({ error: err.message })
  }
}

// Exportă funcțiile pentru a fi folosite în rutele Express
module.exports = {
  createReview,
  getReviews,
  getReviewsByPaper,
  updateReview
}
