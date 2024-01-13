const express = require('express')
const { taskController } = require('../controllers')

const router = express.Router()

router.get('/:id', taskController.getTask)
router.post('/', taskController.createTask)
router.put('/:id', taskController.updateTask)
router.delete('/:id', taskController.deleteTask)

module.exports = router