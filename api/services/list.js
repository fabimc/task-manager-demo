const { List } = require('../models')

const getList = async (id) => await List.findByPk(id)

const getLists = async () => await List.findAll()

const createList = async (title) => {
  return await List.create({ title })
}

const updateList = async (list, title) => {
  return await list.update({ title })
}

const deleteList = async (list) => {
  return await list.destroy()
}

module.exports = { getList, getLists, createList, updateList, deleteList }
