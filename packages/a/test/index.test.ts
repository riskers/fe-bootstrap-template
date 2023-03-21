import { assert } from 'chai';
import { add, sub } from '../src/index';

describe('add', () => {
  it('adds 1 + 2 to equal 3', () => {
    assert.equal(add(1, 2), 3);
  });
});

describe('sub', () => {
  it('adds 1 - 2 to equal -1', () => {
    assert.equal(sub(1, 2), -1);
  });
});
