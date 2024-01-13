const { Task } = require('../models')

/* WARNING THIS WILL DROP THE CURRENT DATABASE */
seed()

async function seed() {
  // create tables
  await Task.sync({ force: true })

  //insert data
  await Promise.all([
    Task.create({
      id: 1,
      text: 'do interview',
      completed: false
    }),
    Task.create({
      id: 2,
      text: 'create task manager',
      completed: false
    }),
    Task.create({
      id: 3,
      text: 'profit!',
      completed: false
    })
  ])
}
