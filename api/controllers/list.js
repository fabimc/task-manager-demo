
const { listService } = require('../services')

const getList = async (req, res) => {
  const { id } = req.params

  const list = await listService.getList(id)
  
  if (!list) return res.status(404).end()
  res.json(list)
}

const getLists = async (_req, res) => {
  const lists = await listService.getLists()
  
  if (!lists) return res.status(404).end()
  res.json(lists)
}

const createList = async (req, res) => {
  const { title } = req.body

  let createdList = null
  try {
    createdList = await listService.createList(title)
  } catch (error) {
    return res.status(422).json(error)
  }
  
  res.json(createdList)
}

const updateList = async (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const list = await listService.getList(id)

  if (!list) return res.status(404).end()

  let updatedList = null
  try {
    updatedList = await listService.updateList(list, title)
  } catch (error) {
    return res.status(422).json(error)
  }
  
  res.json(updatedList)
}

const deleteList = async (req, res) => {
  const { id } = req.params

  const list = await listService.getList(id)

  if (!list) return res.status(404).end()

  try {
    await listService.deleteList(list)
  } catch (error) {
    return res.status(422).json(error)
  }
  
  res.status(204).end()
}

module.exports = { getList, getLists, createList, updateList, deleteList }