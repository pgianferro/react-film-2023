import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/home_view";
import LoginView from '../../features/auth/views/login/login_view'
import PrivateRoute from '../../features/auth/components/private_route'
import PublicRoute from '../../features/auth/components/public_route'
import HomeView2 from "../../features/home/home_view2";
import LoginView2 from '../../features/auth/views/login/login_view2'

//createBrowserRouter es una función que le va a decir a mi app de React que utilice la API nativa del navegador para las rutas.
export const appRouter = createBrowserRouter([
  //Recibe un arreglo de rutas, las rutas son objetos
  {
    path: "/",
    element: (
      <PrivateRoute>
        {//      <HomeView />
        } 
        <HomeView2/>
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        {//      <LoginView />
        } 
        <LoginView2 />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: (
      <div>No se encontró la página</div>
      ),
  },
]);
