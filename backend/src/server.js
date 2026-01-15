const app = require('./app')
const { sequelize } = require('./models')

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('API running on 3000'))
})
