const { Sequelize, sequelize } = require('../core/database')

class Task extends Sequelize.Model {}
Task.init(
  {
    title: {
      type: Sequelize.TEXT('medium'),
      allowNull: false
    },
    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  },
  {
    sequelize,
    modelName: 'Task'
  }
)

module.exports = Task
