import Axios from 'axios'

export const actionTypes = {
  ADD: 'ADD',
  POSTS: 'POSTS',
}

export const addCount = () => (dispatch) => {
  return dispatch({ type: actionTypes.ADD })
}

export const getPosts = () => async (dispatch) => {
  const { data } = await Axios.get('https://jsonplaceholder.typicode.com/posts')
  dispatch({ type: actionTypes.POSTS, payload: data })
}
