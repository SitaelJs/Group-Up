import { Redirect, Route } from 'react-router'

function PrivateRoute({ children, ...rest }) {
  const auth = localStorage.getItem('user')

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
