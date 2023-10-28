'use strict';

const validator = require('../src/middleware/validator');

describe('validator middleware', () => {
  let req = {query: {name: 'Shaheem'}};
  let res = {};
  let next = jest.fn();

  it('validates query as expected', () => {
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith();
  });

  it('fails appropraitely if there is no query name', () => {
    req = {query: {notName: 'Jakai'}};
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('Missing name query');
  });
});
