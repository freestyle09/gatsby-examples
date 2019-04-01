# REST API

Great tutorial was used:

https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

## HTTPie

https://httpie.org/

List tasks

    http http://localhost:3000/tasks name="Some task"
    
Create taks

    http POST --form http://localhost:3000/tasks name="Some task"

Get single task

    # change id url path

    http GET http://localhost:3000/tasks/5ca2722590229c23da0b3c73

Update task

    # change id url path
    http PUT http://localhost:3000/tasks/5ca2722590229c23da0b3c73 name="new name" status:='["ongoing"]'

Delete task

    # change id url path
    http DELETE http://localhost:3000/tasks/5ca2722590229c23da0b3c73

# GRAPHQL

Tutorials

https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1

https://medium.freecodecamp.org/how-to-set-up-a-graphql-server-using-node-js-express-mongodb-52421b73f474

## HTTPie

Get Tasks

    http -v GET http://localhost:3000/graphql query="{ tasks { _id, name, status }}"

Get Task

    http -v GET http://localhost:3000/graphql query='{ task(_id: "5ca27dec4c481831856bb054") { _id, name, status } }'

Update Task Name

    http -v POST http://localhost:3000/graphql query='mutation ($id: String!, $name: String!) { updateTaskName(_id: $id, name: $name) { ...taskFields } } fragment taskFields on Task { _id, name, status }' variables='{ "id": "5ca27dec4c481831856bb054", "name": "New name from bash" }'

Add New Task

    http -v POST http://localhost:3000/graphql query='mutation ($name: String!, $status: [String]!) { addTask(name: $name, status: $status) { ...taskFields } } fragment taskFields on Task { _id, name, status }' variables='{"name": "New name from bash", "status": [ "ongoing" ]}'

Delete Task

