const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const User = require('./User')(sequelize, Sequelize)
const Conference = require('./Conference')(sequelize, Sequelize)
const Paper = require('./Paper')(sequelize, Sequelize)
const Review = require('./Review')(sequelize, Sequelize)
const ConferenceReviewer = require('./ConferenceReviewer')(sequelize, Sequelize)

Conference.belongsToMany(User, {
  through: ConferenceReviewer,
  foreignKey: 'conferenceId',
  otherKey: 'reviewerId'
})

User.belongsToMany(Conference, {
  through: ConferenceReviewer,
  foreignKey: 'reviewerId',
  otherKey: 'conferenceId'
})

Conference.hasMany(Paper, {
  foreignKey: 'conferenceId'
})

Paper.belongsTo(Conference, {
  foreignKey: 'conferenceId'
})

User.hasMany(Paper, { foreignKey: 'authorId' })
Paper.belongsTo(User, { foreignKey: 'authorId' })

Review.belongsTo(User, {
  foreignKey: 'reviewerId'
})

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
