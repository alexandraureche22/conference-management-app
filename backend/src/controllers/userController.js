const { User } = require('../models')

// GET /users/reviewers
const getReviewers = async (req, res) => {
  try {
    const reviewers = await User.findAll({
      where: { role: 'REVIEWER' },
      attributes: ['id', 'name', 'email']
    })
    res.json(reviewers)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// POST /users/authors
const createAuthor = async (req, res) => {
  try {
    const { name, email } = req.body

    const author = await User.create({
      name,
      email,
      role: 'AUTHOR'
    })

    res.status(201).json(author)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// GET /users/authors
const getAuthors = async (req, res) => {
  try {
    const authors = await User.findAll({
      where: { role: 'AUTHOR' },
      attributes: ['id', 'name', 'email']
    })
    res.json(authors)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getReviewers,
  createAuthor,
  getAuthors
}
