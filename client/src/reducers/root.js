import {
  REQUEST_CALCULATION,
  RECEIVE_RESULT
} from '../constants/ActionTypes'

const initialState = {
  fields: {
    initialSavings: 0,
    monthlySavings: 0,
    interestRate: 4
  },
  amounts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_RESULT:
      return {
        ...state,
        amounts: action.result.result
      }

    case REQUEST_CALCULATION:

    default:
      return state
  }
}
