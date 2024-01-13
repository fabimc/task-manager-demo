const List = require('./list')
const Task = require('./task')

List.hasMany(Task, { onDelete: 'cascade' })
Task.belongsTo(List)

module.exports = { List, Task }