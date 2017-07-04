import {
  CHANGE_FIELD,
  REQUEST_CALCULATION,
  RECEIVE_RESULT
} from '../constants/ActionTypes'

const initialState = {
  fields: {
    initialSavings: 0,
    monthlySavings: 0,
    interestRate: 4,
    interestFrequency: 'Monthly'
  },
  amounts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.name]: action.value
        },
      }

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
