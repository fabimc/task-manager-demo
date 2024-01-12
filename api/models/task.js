const { Sequelize, sequelize } = require('../core/database')

class Task extends Sequelize.Model {}
Task.init(
  {
    title: {
      type: Sequelize.TEXT('medium'),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Task'
  }
)

module.exports = Task
