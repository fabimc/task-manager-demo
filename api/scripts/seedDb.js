const { List, Task } = require('../models')

/* WARNING THIS WILL DROP THE CURRENT DATABASE */
seed()

async function seed() {
  // create tables
  await List.sync({ force: true })
  await Task.sync({ force: true })

  //insert data
  await Promise.all([
    List.create({
      id: 1,
      title: 'Grocery',
      type: 'client'
    }),
    List.create({
      id: 2,
      title: 'Chores'
    }),
    List.create({
      id: 3,
      title: 'Work'
    }),
    Task.create({
      id: 1,
      title: 'milk',
      completed: false,
      ListId: 1
    }),
    Task.create({
      id: 2,
      title: 'eggs',
      completed: false,
      ListId: 1
    }),
    Task.create({
      id: 3,
      title: 'cookies',
      completed: false,
      ListId: 1
    }),
    Task.create({
      id: 4,
      title: 'clean room',
      completed: false,
      ListId: 2
    }),
    Task.create({
      id: 5,
      title: 'wash the dishes',
      completed: false,
      ListId: 2
    }),
    Task.create({
      id: 6,
      title: 'clean garage',
      completed: false,
      ListId: 2
    }),
    ,
    Task.create({
      id: 7,
      title: 'do interview',
      completed: false,
      ListId: 3
    }),
    Task.create({
      id: 8,
      title: 'create task manager',
      completed: false,
      ListId: 3
    }),
    Task.create({
      id: 9,
      title: 'profit!',
      completed: false,
      ListId: 3
    })
  ])
}
