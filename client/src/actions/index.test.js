import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as types from '../constants/ActionTypes'
import * as actions from './index'


describe('Actions', () => {

  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)

  const expectedResult = {error: false, result: [123, 456, 789]}
  fetchMock.post('/api/calculate-earnings', expectedResult);


  it('requestCalculation should create REQUEST_CALCULATION action', () => {
    expect(actions.requestCalculation()).toEqual({
      type: types.REQUEST_CALCULATION
    })
  })

  it('receiveResult should create RECEIVE_RESULT action', () => {
    expect(actions.receiveResult()).toHaveProperty('type', types.RECEIVE_RESULT)
  })

  it('fetchResult should create both REQUEST_CALCULATION and RECEIVE_RESULT actions', () => {
    const store = mockStore({})
    const params = {
      initialSavings: 1000,
      monthlySavings: 50,
      interestRate: 2
    }
    return store.dispatch(actions.fetchResult(params))
      .then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({params: params,
          type: 'REQUEST_CALCULATION'
        })
        expect(actions[1]).toHaveProperty('type', types.RECEIVE_RESULT)
        expect(actions[1]).toHaveProperty('params', params)
        expect(actions[1]).toHaveProperty('result', expectedResult)
      })
  })

})
