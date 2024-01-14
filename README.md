# TaskManagerDemo

This demo has an api project and a frontend project. Each one has its own package.json file and can be run independently.

- Run `npm run seed` inside the api project to seed the database with some data. A database file named `database.sqlite3` will be created in the root folder of the api project.
- Run `npm start` inside the api project to start the api. Navigate to `http://localhost:3001/health` to check if the api is running.
- Run `npm start` inside the frontend project to start the frontend. Navigate to `http://localhost:4200/`

## Api

The API (http://localhost:3001/) was developed with Express and can be tested with Postman or a similar tool.

- create task: `POST /api/tasks`. 
Sample payload: `{ "text": "Task 1", "completed": false}`

- get all tasks: `GET /api/tasks`

- get task by id: `GET /api/tasks/:id`

- update task: `PUT /api/tasks/:id`.
Sample payload: `{ "text": "Task 2", "completed": true}`

- delete task: `DELETE /api/tasks/:id`

## Frontend

The frontend was developed with Angular 17 to showcase some of the new features like the `@if` and `@for` blocks.

Observables were used to fetch data from the api and to update the UI when the data changes. Use of rxjs operators like `map`, `filter`, and `catchError` was made.

## Further help

Contact me at fabimc@gmail.com
