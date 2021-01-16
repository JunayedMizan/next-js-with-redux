import Axios from 'axios'

export const actionTypes = {
  ADD: 'ADD',
  POSTS: 'POSTS',
}

export const addCount = () => (dispatch) => {
  return dispatch({ type: actionTypes.ADD })
}

export const getPosts = () => async (dispatch) => {
  const { data } = await Axios.get('/api/products')
  dispatch({ type: POSTS, payload: data })
}
