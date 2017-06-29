import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('Actions', () => {
  it('noop should create NOOP action', () => {
    expect(actions.noop()).toEqual({
      type: types.NOOP
    })
  })
})
