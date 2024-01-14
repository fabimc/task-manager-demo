const { Task } = require('../models')

const getTask = async (id) => await Task.findByPk(id)

const getTasks = async () => await Task.findAll()

const createTask = async (text, completed) => {
  return await Task.create({ text, completed })
}

const updateTask = async (task, text, completed) => {
  return await task.update({ text, completed })
}

const deleteTask = async (task) => {
  return await task.destroy()
}

module.exports = { getTask, getTasks, createTask, updateTask, deleteTask }
