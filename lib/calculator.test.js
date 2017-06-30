const assert = require('assert')
const calculator = require('./calculator')

describe('calculator', () => {
  it('works', () => {
    assert.equal(
      calculator(123, 456, 789),
      123
    )
  })
})
