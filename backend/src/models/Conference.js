// backend/src/models/Conference.js
module.exports = (sequelize, DataTypes) => {
    // Definește modelul Conference cu atributele sale
  return sequelize.define('Conference', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    startDate: { type: DataTypes.DATE, allowNull: false },
    endDate: { type: DataTypes.DATE, allowNull: false }
  })
}
