<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Paper', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abstract: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('IN_REVIEW', 'REVISION_REQUIRED', 'ACCEPTED'),
=======
// File: backend/src/models/Paper.js
module.exports = (sequelize, DataTypes) => {
    // Definește modelul Paper cu atributele sale
  return sequelize.define('Paper', {
    title: { type: DataTypes.STRING, allowNull: false },
    abstract: { type: DataTypes.TEXT, allowNull: false },
    fileUrl: { type: DataTypes.STRING, allowNull: false },
    status: {
      type: DataTypes.ENUM('SUBMITTED', 'IN_REVIEW', 'APPROVED', 'REJECTED'),
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
      defaultValue: 'SUBMITTED'
    }
  })
}
