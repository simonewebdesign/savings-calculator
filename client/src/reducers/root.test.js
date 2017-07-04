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

  it('can handle CHANGE_FIELD', () => {
    expect(
      root(sampleState, {type: types.CHANGE_FIELD, name: 'initialSavings', value: 50})
    ).toEqual({
      fields: {
        initialSavings: 50,
        monthlySavings: 200,
        interestRate: 3
      },
      amounts: []
    })
  })

  it('can handle REQUEST_CALCULATION', () => {
    expect(
      root(sampleState, {type: types.REQUEST_CALCULATION})
    ).toBe(sampleState)
  })

  it('can handle RECEIVE_RESULT', () => {
    expect(
      root(sampleState, {
        type: types.RECEIVE_RESULT,
        result: {result: [123, 456]
      }})
    ).toHaveProperty('amounts', [123, 456])
  })

})
