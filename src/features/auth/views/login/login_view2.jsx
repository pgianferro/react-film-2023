// Importa los módulos y componentes necesarios
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hook/use_auth'
import { Input } from "@nextui-org/react";
import ButtonTest from "./button/loginbutton/buttonTest";
import Suscbutton from '../../../suscription/suscbutton/suscbutton';
import Netflixloginviewbg from './netflix-loginview-bg';
import Remember from './button/options/remember';
import Footer from './footer/footer';
import "../styles/login.styles.css";
/* import InfoComponents from './information/informationpart/InfoComponents'; */

const LoginView2 = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSubmit = async (e) => {
    // ... (sin cambios)
  };

  // Estado para controlar la visibilidad del footer al hacer scroll
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Agregar un event listener para el evento de scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Mostrar el footer cuando el usuario ha hecho suficiente scroll
      setShowFooter(scrollPosition > 200);
    };

    // Agregar el event listener al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Sección superior */}
      <div className='h-screen'>
        <Netflixloginviewbg />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-stone-950 p-8 rounded-md shadow-md w-96 bg-opacity-90">
            <h3 className="text-3xl text-default-800 mb-5">Inicia sesión</h3>
            <form action="" onSubmit={handleSubmit}>
              <div>
                <Input className='mb-4'
                  type="email"
                  label="Email"
                  placeholder="Ingresa tu correo electrónico"
                  required
                />
                <Input
                  type="password"
                  label="Contraseña"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                  required
                />
                <ButtonTest />
                <Remember></Remember>
              </div>
            </form>
            <div className="mt-6 text-sm text-gray-500">
              <Suscbutton />
            </div>
            <div className="mt-4 text-xs text-gray-500">
              Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.
            </div>
          </div>
        </div>
      </div>
      {/* Sección inferior, información extra. */}
      <div>
        {/* Renderizar el Footer solo si showFooter es true */}
        <Footer />
      </div>
    </>
  );
};

export default LoginView2;


