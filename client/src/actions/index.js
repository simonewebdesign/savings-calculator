import * as types from '../constants/ActionTypes'

export const noop = () => ({type: types.NOOP })

export const requestCalculation = (params, json) => ({
  type: types.REQUEST_CALCULATION,
  params
})

export const receiveResult = (params, json) => ({
  type: types.RECEIVE_RESULT,
  params,
  result: json,
  receivedAt: Date.now()
})

let headers = new Headers()
headers.set('Accept', 'application/json')
headers.set('Content-Type', 'application/json')

export const fetchResult = params => dispatch => {
  const body = JSON.stringify(params)
  const opts = {
    method: 'POST',
    body,
    headers
  }
  dispatch(requestCalculation(params))
  return fetch('/api/calculate-earnings', opts)
    .then(response => response.json())
    .then(json => dispatch(receiveResult(params, json)))
    // TODO: handle error
}
