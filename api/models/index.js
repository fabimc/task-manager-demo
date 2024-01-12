const List = require('./list')
const Task = require('./task')

List.hasMany(Task)
Task.belongsTo(List)

module.exports = { Contract, Job, Profile }