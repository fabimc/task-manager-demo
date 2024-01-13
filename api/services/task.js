const { Task } = require('../models')

const getTask = async (id) =>
  await Task.findByPk(id)

const getTasks = async (listId) =>
  await Task.findAll({
    where: {
      ListId: listId
    }
  })

  const createTask = async (title, listId) => {
    console.log('creating title', title)
    console.log('creating listId', listId)
    return await Task.create({ title, completed: false, ListId: listId })
  }

  const updateTask = async (task, title, completed) => {
    console.log('task', task)
    console.log('title', title)
    console.log('completed', completed)

    return await task.update({ title, completed })
  }
  
  const deleteTask = async (task) => {
    return await task.destroy()
  }

module.exports = { getTask, getTasks, createTask, updateTask, deleteTask }
