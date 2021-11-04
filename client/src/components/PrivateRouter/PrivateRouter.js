// import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

function PrivateRoute({ children, ...rest }) {
  // const [checkAuth, setCheckAuth] = useState()
  const auth = useSelector((state) => state.auth)
  console.log(auth)

  // const helperPrivateRouter = () => {
  //   if (auth.length) {
  //     return true
  //   }
  //   return false
  // }

  return (
    <Route
      {...rest}
      render={({ location }) => ((auth) ? (
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
