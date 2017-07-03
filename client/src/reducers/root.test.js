import root from './root'
import * as types from '../constants/ActionTypes'

describe('The root reducer', () => {

  const initialState = {
    fields: {
      initialSavings: 0,
      monthlySavings: 0,
      interestRate: 4
    },
    amounts: []
  }

  const sampleState = {
    fields: {
      initialSavings: 1000,
      monthlySavings: 200,
      interestRate: 3
    },
    amounts: []
  }

  it('can handle initial state', () => {
    expect(
      root(undefined, {})
    ).toEqual(initialState)
  })

  it('can handle REQUEST_CALCULATION', () => {
    expect(
      root(sampleState, {type: types.REQUEST_CALCULATION})
    ).toBe(sampleState)
  })

})
