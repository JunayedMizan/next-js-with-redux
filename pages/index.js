import { wrapper } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { addCount } from '../store/action'

const index = () => {
  const dispatch = useDispatch()
  const { count } = useSelector((state) => state.count)
  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        AddCount: <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(addCount())}>Add To Count</button>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(addCount())
  }
)

export default index
