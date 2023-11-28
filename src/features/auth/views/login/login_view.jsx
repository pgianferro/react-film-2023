import React, {useState} from 'react'
import { useAuth } from "../../hook/use_auth.js"; 

const LoginView = () => {
  const {login} = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {      
      //Capturar los datos del form en un objeto con la propiedad fromEntries
      const form = e.target;
      const formData = new FormData(form);
      const {email, password} = Object.fromEntries(formData);
      
      //Capturar los datos del form como arriba en una sóla línea
      //const {email,password} = Object.fromEntries(new FormData(e.target))

      form.reset();

      await login(email,password)
    } catch (error) {
      console.log();
      setError(error.response.data.msg)
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div>
      <h1>Reactfilms LOGIN</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" />
        <input type="text" name="password" />
        <button type='submit'>Iniciar Sesión</button>
        <p>{error}</p>
      </form>
    </div>
  )
}

export default LoginView