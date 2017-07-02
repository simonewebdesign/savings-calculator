import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('Actions', () => {

  it('noop should create NOOP action', () => {
    expect(actions.noop()).toEqual({
      type: types.NOOP
    })
  })

  it('requestCalculation should create REQUEST_CALCULATION action', () => {
    expect(actions.requestCalculation()).toEqual({
      type: types.REQUEST_CALCULATION
    })
  })

  it('receiveResult should create RECEIVE_RESULT action', () => {
    expect(actions.receiveResult()).toHaveProperty('type', types.RECEIVE_RESULT)
  })

})
