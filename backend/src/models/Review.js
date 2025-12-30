module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Review', {
    feedback: { type: DataTypes.TEXT, allowNull: false },
    decision: {
      type: DataTypes.ENUM('PENDING', 'APPROVE', 'REJECT'),
      defaultValue: 'PENDING'
    }
  })
}
