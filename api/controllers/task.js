const { taskService } = require('../services')

const getTask = async (req, res) => {
  const { id } = req.params

  const task = await taskService.getTask(id)

  if (!task) return res.status(404).end()
  res.json(task)
}

const getTasks = async (req, res) => {
  const { listId } = req.params
  const tasks = await taskService.getTasks(listId)

  if (!tasks) return res.status(404).end()
  res.json(tasks)
}

const createTask = async (req, res) => {
  const { text, completed } = req.body

  let task = null
  try {
    task = await taskService.createTask(text, completed || false)
  } catch (error) {
    return res.status(422).json(error)
  }

  res.json(task)
}

const updateTask = async (req, res) => {
  const { id } = req.params
  const { text, completed } = req.body

  const task = await taskService.getTask(id)

  if (!task) return res.status(404).end()

  let updatedTask = null
  try {
    updatedTask = await taskService.updateTask(task, text, completed)
  } catch (error) {
    return res.status(422).json(error)
  }

  res.json(updatedTask)
}

const deleteTask = async (req, res) => {
  const { id } = req.params

  const task = await taskService.getTask(id)

  if (!task) return res.status(404).end()

  try {
    await taskService.deleteTask(task)
  } catch (error) {
    return res.status(422).json(error)
  }

  res.status(204).end()
}

module.exports = { getTask, getTasks, createTask, updateTask, deleteTask }
