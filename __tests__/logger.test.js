'use strict';

const logger = require('../src/middleware/logger');
describe('logger middleware', () => {
  let req = {};
  let res = {};
  let next = jest.fn();
  console.log = jest.fn();

  it('logs method and path', async () => {
    logger(req, res, next);
    
    expect(console.log).toHaveBeenCalledWith(req.method, req.path);
    expect(next).toHaveBeenCalledWith();
  });
});


module.exports = logger;