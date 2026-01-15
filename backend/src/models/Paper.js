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
      defaultValue: 'SUBMITTED'
    }
  })
}
