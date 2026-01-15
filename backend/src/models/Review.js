// File: backend/src/models/Review.js
module.exports = (sequelize, DataTypes) => {
    // Definește modelul Review cu atributele sale
  return sequelize.define('Review', {
    feedback: { type: DataTypes.TEXT, allowNull: false },
    decision: {
      type: DataTypes.ENUM('PENDING', 'APPROVE', 'REJECT'),
      defaultValue: 'PENDING'
    }
  })
}
