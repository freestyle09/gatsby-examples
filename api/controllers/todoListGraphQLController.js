'use strict';

var { buildSchema } = require('graphql'),
  mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

// GraphQL schema
exports.schema = buildSchema(`
    type Query {
        task(_id: String!): Task
        tasks(name: String): [Task]
    },
    type Mutation {
      addTask(name: String!, status: [String]!): Task
      updateTaskName(_id: String!, name: String): Task
      deleteTask(_id: String, name: String, status: [String]): Task
    }
    type Task {
        _id: String
        name: String
        status: [String]
    }
`);

var getTask = function (args) {
  console.log("Get Task", JSON.stringify(args))
  return new Promise((resolve, reject) => {
    Task.findOne(args).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}

var getTasks = function (args) {
  console.log("Get Tasks", JSON.stringify(args))
  return new Promise((resolve, reject) => {
    Task.find({})
      .populate()
      .exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
  });
}

var addTask = ({ name, status }) => {
  console.log("Add task: ", JSON.stringify({name, status}));
  const newTask= new Task({ name, status });
  return new Promise((resolve, reject) => {
    newTask.save((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}

var updateTaskName = function ({ _id, name}) {
  console.log("Update Task name", JSON.stringify({_id, name}))
  return new Promise((resolve, reject) => {
    Task.findOneAndUpdate({ _id }, { $set: { name } }, { new: true })
      .exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
  }); 
}

var deleteTask = (args) => {
  console.log("Delete task: ", JSON.stringify(args));
  return new Promise((resolve, reject) => {
    User.findOneAndRemove(args).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}

exports.root = {
  task: getTask,
  tasks: getTasks,
  addTask: addTask,
  updateTaskName: updateTaskName,
  deleteTask: deleteTask
};
