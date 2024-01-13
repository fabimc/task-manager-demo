const { Task } = require('../models')

const getTask = async (id) =>
  await Task.findByPk(id)

const getTasks = async () =>
  await Task.findAll()

  const createTask = async (title) => {
    return await Task.create({ title, completed: false })
  }

  const updateTask = async (task, title, completed) => {
    return await task.update({ title, completed })
  }
  
  const deleteTask = async (task) => {
    return await task.destroy()
  }

module.exports = { getTask, getTasks, createTask, updateTask, deleteTask }
