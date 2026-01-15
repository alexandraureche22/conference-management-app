// File: backend/src/models/User.js
module.exports = (sequelize, DataTypes) => {
    // Definește modelul User cu atributele sale
  return sequelize.define('User', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('AUTHOR', 'REVIEWER', 'ORGANIZER'), allowNull: false }
  })
}
