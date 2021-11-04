// import { useState } from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

function PrivateRoute({ children, ...rest }) {
  // const [checkAuth, setCheckAuth] = useState()
  const userInAuth = useSelector((state) => state.user)
  const [user, setUser] = useState({})
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    setTimeout(() => {
      setUser(auth)
    }, 1000)
  }, [userInAuth])

  // const helperPrivateRouter = () => {
  //   if (auth.length) {
  //     return true
  //   }
  //   return false
  // }

  return (
    <Route
      {...rest}
      render={({ location }) => ((user) ? (
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
