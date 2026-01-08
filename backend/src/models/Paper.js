// File: backend/src/models/Paper.js
module.exports = (sequelize, DataTypes) => {
    // Definește modelul Paper cu atributele sale
  return sequelize.define('Paper', {
    title: { type: DataTypes.STRING, allowNull: false },
    abstract: { type: DataTypes.TEXT, allowNull: false },
    fileUrl: { type: DataTypes.STRING, allowNull: false },
    status: {
      type: DataTypes.ENUM('SUBMITTED', 'IN_REVIEW', 'APPROVED', 'REJECTED'),
      defaultValue: 'SUBMITTED'
    }
  })
}
