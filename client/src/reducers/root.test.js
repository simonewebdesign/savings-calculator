import root from './root'
import * as types from '../constants/ActionTypes'

describe('The root reducer', () => {

  it('can handle initial state', () => {
    expect(
      root(undefined, {})
    ).toEqual([
      {
        text: 'Hello'
      }
    ])
  })

  it('can handle NOOP', () => {
    expect(
      root([
        {
          text: 'Hello'
        }
      ], {
        type: types.CLEAR_COMPLETED
      })
    ).toEqual([
      {
        text: 'Hello'
      }
    ])
  })

})
