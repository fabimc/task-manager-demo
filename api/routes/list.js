const express = require('express')
const { listController, taskController } = require('../controllers')

const router = express.Router()

router.get('/:id', listController.getList)
router.get('/:listId/tasks', taskController.getTasks)
router.get('/', listController.getLists)
router.post('/', listController.createList)
router.put('/:id', listController.updateList)
router.delete('/:id', listController.deleteList)

module.exports = router
