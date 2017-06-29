import { NOOP } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Hello'
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case NOOP:
    default:
      return state
  }
}
