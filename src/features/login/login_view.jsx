import React from 'react'
import { useAuth } from '../../core/auth/hook/use_auth'

const LoginView = () => {

  const {login, isLoggedIn} = useAuth();

  console.log(isLoggedIn);

  return (
    <div>
      <h1>LOGIN</h1>
      <button
      onClick={login}
      >Iniciar sesión</button>
    </div>
  )
}

export default LoginView