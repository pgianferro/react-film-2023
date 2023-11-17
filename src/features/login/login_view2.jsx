import React, {useState} from 'react'
import { useAuth } from '../../core/auth/hook/use_auth'
import {Input} from "@nextui-org/react";
import ButtonLogin from '../login/button/loginbutton/buttonlogin'

const LoginView2 = () => {
  const {login} = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const placements = [
    "inside"
  ]

  return (
    <>

    {//Este es el que escribió el profesor.
    }
    

      {
        // Probando....
        /*
        <h1>Reactfilms LOGIN</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" />
        <input type="text" name="password" />
        <button type='submit'>Iniciar Sesión</button>
        <p>{error}</p>
      </form>
        */
      }

    {//Este lo hizo Lucas
    }
    {/* <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2"> */}
      <div className="flex h-screen items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h3 className="text-default-500 text-small">Inicia sesión</h3>
        <form action="">
        <div /* className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4" */>
          {placements.map((placement) => (
            <Input
              key={placement}
              type="email"
              label="Email"
              labelPlacement={placement}
              description={placement}
              placeholder="Ingresa tu correo electrónico"
              required
            />
          ))}
          <Input
            type="password"
            label="Contraseña"
            name="password"
            placeholder="Ingresa tu contraseña"
            required
          />
          <ButtonLogin type="submit" className="mt-4">
            Iniciar sesión
          </ButtonLogin>
        </div>
        </form>
        <div className="mt-6 text-sm text-gray-500">
          ¿Primera vez en Netflix?{' '}
          {/* <Link href="#">Suscríbete ahora.</Link> */}
        </div>

        <div className="mt-4 text-xs text-gray-500">
          Esta página está protegida por Google reCAPTCHA para comprobar que no
          eres un robot.{' '}
          {/* <Link href="#">Más info.</Link> */}
        </div>
      </div>   
    </div>  
    </>
  )
}

export default LoginView2