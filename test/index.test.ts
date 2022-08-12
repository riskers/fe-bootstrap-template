import { assert } from 'chai';
import { add } from '../src/index';

describe('add', () => {
  it('adds 1 + 2 to equal 3', () => {
    assert.equal(add(1, 2), 3);
  });
});
