/* eslint-env mocha */

const { expect } = require('chai')
const testServer = require('../../test-helpers/test-server');
const { statusEnum } = require('../models/todoListModel');

describe('Test endpoint /tasks', function () {
  testServer.useInTest()

  it('Get all', async function () {
    const api = this.api;
    const response = await api.get('/tasks');

    expect(response)
      .to.have.nested.property('data')
      .that.is.an('array')
      .with.lengthOf(30);
  });

  it('Post new task', async function () {
    const task = {
      name: 'test',
      status: statusEnum[0]
    }

    const api = this.api;
    const response = await api.post('/tasks', task);

    expect(response)
      .to.have.nested.property('data')
      .that.is.an('object');

    expect(response['data']).to.have.property('name', task['name']);
    expect(response['data']).to.have.property('status', task['status']);
  });
});