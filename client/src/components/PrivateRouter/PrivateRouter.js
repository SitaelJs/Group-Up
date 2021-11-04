import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

function PrivateRoute({ children, ...rest }) {
  const auth = useSelector((state) => state.auth)
  console.log(!!document.cookie)
  console.log(auth)
  return (
    <Route
      {...rest}
      render={({ location }) => (auth ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/auth/signin',
            state: { from: location },
          }}
        />
      ))}
    />
  )
}

export default PrivateRoute
