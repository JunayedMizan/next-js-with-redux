import { wrapper } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { addCount, getPosts } from '../store/action'

const index = () => {
  const dispatch = useDispatch()
  const { counter, posts } = useSelector((state) => state.data)
  return (
    <div>
      <h1>
        AddCount: <span>{counter}</span>
      </h1>
      <button onClick={() => dispatch(addCount())}>Add To Count</button>

      <h1>
        Posts: <span>{posts.length}</span>
      </h1>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(addCount())
    store.dispatch(getPosts())
  }
)

export default index
