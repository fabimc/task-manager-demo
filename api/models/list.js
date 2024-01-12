const { Sequelize, sequelize } = require('../core/database')

class List extends Sequelize.Model {}
List.init(
  {
    title: {
      type: Sequelize.TEXT('tiny'),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'List'
  }
)

module.exports = List
