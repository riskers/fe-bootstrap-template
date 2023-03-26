import { add } from '@riskers12/a';
import { assert } from 'chai';

describe('add', () => {
  it('adds 1 + 2 to equal 3', () => {
    assert.equal(add(1, 2), 3);
  });
});
