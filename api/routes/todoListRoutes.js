'use strict';

module.exports = function (app) {
  var todoList = require('../controllers/todoListController');

  app.route('/')
    .get((req, res, next) => {
      res.status(200).json({ name: 'hello-world' })
    });

  app.route('/tasks')
    .get(todoList.listAllTasks)
    .post(todoList.createATask);
};