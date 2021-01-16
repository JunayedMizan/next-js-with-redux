import { actionTypes } from './action'

const initialState = {
  counter: 0,
  posts: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return { ...state, counter: state.counter + 1 }
    case actionTypes.POSTS:
      console.log('POST LENGTH: ', action.payload.length)
      return { ...state, posts: action.payload }
    default:
      return state
  }
}
