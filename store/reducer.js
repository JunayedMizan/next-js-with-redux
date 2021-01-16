import { actionTypes } from './action'

const initialState = {
  count: 0,
  posts: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return { ...state, count: state.count + 1 }
    case actionTypes.POSTS:
      return { ...state, posts: action.payload }
    default:
      return state
  }
}
