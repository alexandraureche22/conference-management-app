const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const User = require('./User')(sequelize, Sequelize)
const Conference = require('./Conference')(sequelize, Sequelize)
const Paper = require('./Paper')(sequelize, Sequelize)
const Review = require('./Review')(sequelize, Sequelize)
const ConferenceReviewer = require('./ConferenceReviewer')(sequelize, Sequelize)

// Definirea relațiilor între modele
Conference.belongsToMany(User, {
  through: ConferenceReviewer,
  foreignKey: 'conferenceId',
  otherKey: 'reviewerId'
})
// Relația many-to-many între User și Conference prin ConferenceReviewer
User.belongsToMany(Conference, {
  through: ConferenceReviewer,
  foreignKey: 'reviewerId',
  otherKey: 'conferenceId'
})
// Relația one-to-many între Conference și Paper
Conference.hasMany(Paper, {
  foreignKey: 'conferenceId'
})
// Relația many-to-one între Paper și Conference
Paper.belongsTo(Conference, {
  foreignKey: 'conferenceId'
})
// Relația one-to-many între User și Paper (autor și lucrări)
User.hasMany(Paper, { foreignKey: 'authorId' })
// Relația many-to-one între Paper și User (lucrare și autor)
Paper.belongsTo(User, { foreignKey: 'authorId' })

// Relațiile între Review, User și Paper
Review.belongsTo(User, {
  foreignKey: 'reviewerId'
})

// Relația many-to-one între Review și User (recenzie și recenzor)
User.hasMany(Review, {
  foreignKey: 'reviewerId'
})


Review.belongsTo(Paper, {
  foreignKey: 'paperId'
})

Paper.hasMany(Review, {
  foreignKey: 'paperId'
})


User.hasMany(Review, { foreignKey: 'reviewerId' })
Review.belongsTo(User, { foreignKey: 'reviewerId' })

module.exports = {
  sequelize,
  User,
  Conference,
  Paper,
  Review,
  ConferenceReviewer
}
