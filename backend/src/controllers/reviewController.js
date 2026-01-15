<<<<<<< HEAD
const { Review, Paper } = require('../models')

const createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body)
    res.status(201).json(review)
  } catch (err) {
=======
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
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
    res.status(500).json({ error: err.message })
  }
}

<<<<<<< HEAD
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
=======
// Returnează toate recenziile
const getReviews = async (req, res) => {
  try {
    // Găsește toate recenziile
    const reviews = await Review.findAll()
    res.json(reviews)
  } catch (err) {
    // Eroare de server
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
    res.status(500).json({ error: err.message })
  }
}

<<<<<<< HEAD
const getReviewsByPaper = async (req, res) => {
  try {
=======

// Returnează recenziile pentru o lucrare specifică
const getReviewsByPaper = async (req, res) => {
  try {
    // Găsește recenziile după paperId
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
    const reviews = await Review.findAll({
      where: { paperId: req.params.paperId }
    })
    res.json(reviews)
  } catch (err) {
<<<<<<< HEAD
=======
    // Eroare de server
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
    res.status(500).json({ error: err.message })
  }
}

<<<<<<< HEAD
const updateReview = async (req, res) => {
  try {
    const { id } = req.params
    const { decision, feedback } = req.body

    const review = await Review.findByPk(id)
    if (!review) {
      return res.status(404).json({ message: 'Review not found' })
    }

=======
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
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
    review.decision = decision
    review.feedback = feedback
    await review.save()

<<<<<<< HEAD
    // luăm DOAR review-urile acestui paper
    const reviews = await Review.findAll({
      where: { paperId: review.paperId }
    })

    let paperStatus = 'IN_REVIEW'

=======
    // verif toate review paper
    const reviews = await Review.findAll({
      where: { paperId: review.paperId }
    })
    // Determină starea lucrării pe baza recenziilor
    let paperStatus = 'IN_REVIEW'
    // Dacă există cel puțin o recenzie de REJECT, lucrarea este REJECTED
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
    if (reviews.some(r => r.decision === 'REJECT')) {
      paperStatus = 'REJECTED'
    } else if (reviews.every(r => r.decision === 'APPROVE')) {
      paperStatus = 'ACCEPTED'
    }
<<<<<<< HEAD

=======
    // Actualizează starea lucrării
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
    await Paper.update(
      { status: paperStatus },
      { where: { id: review.paperId } }
    )
<<<<<<< HEAD

=======
    // Returnează un mesaj de succes și starea lucrării
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
    res.json({
      message: 'Review updated',
      paperStatus
    })
  } catch (err) {
<<<<<<< HEAD
    console.error(err)
=======
    // Eroare de server
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
    res.status(500).json({ error: err.message })
  }
}

<<<<<<< HEAD

=======
// Exportă funcțiile pentru a fi folosite în rutele Express
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
module.exports = {
  createReview,
  getReviews,
  getReviewsByPaper,
  updateReview
}
