'use strict';
const { Task, statusEnum } = require('../models/todoListModel');

const DEFAULT_NAME = 'Task';

exports.listAllTasks = function (req, res) {
  let todoList = [];

  for (let i = 0; i < 30; i++) {
    const index = Math.floor(Math.random() * 3);
    todoList.push(new Task(`${DEFAULT_NAME} ${i}`, new Date(), statusEnum[index]));
  }

  res.json(todoList);
};

exports.createATask = function (req, res) {
  const { name, status } = req.body;

  res.json(new Task(name, new Date(), status));
};
