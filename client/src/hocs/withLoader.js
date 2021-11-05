import { useLoaderContext } from '../contexts/loaderContext'
import Loader from '../components/Loader/Loader'

const WithLoader = (WrappedComponent) => (props) => {
  const { loader } = useLoaderContext()

  return (
    <>
      {loader ? <Loader /> : <WrappedComponent {...props} />}
    </>
  )
}

export default WithLoader
