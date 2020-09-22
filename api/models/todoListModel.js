'use strict';

exports.Task = class Task {
  constructor(name, createdAt, status) {
    this.name = name;
    this.createdAt = createdAt;
    this.status = status;
  }
}

exports.statusEnum = ['pending', 'ongoing', 'completed'];