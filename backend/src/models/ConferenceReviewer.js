// File: backend/src/models/ConferenceReviewer.js
module.exports = (sequelize, DataTypes) => {
    // Definește modelul de legătură ConferenceReviewer fără atribute suplimentare
  return sequelize.define('ConferenceReviewer', {}, { timestamps: false })
}
