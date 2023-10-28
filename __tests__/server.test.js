'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe('API Server', () => {
  // it is from jest
  it('handles \'/person\' route with query param correctly', async () => {
    const response = await request.get('/person').query({name: 'shaheem'});

    expect(response.status).toEqual(200);
  });

  it('handles missing or invalid requests', async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(404);
  });

  it('handles \'/person\' route without query name', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(500);
  });

  it('handles \'/person\' route with query param output correctly', async () => {
    const response = await request.get('/person').query({name: 'shaheem'});

    // console.log(response.body);

    expect(response.body).toEqual({name: 'shaheem'});
  });
});
