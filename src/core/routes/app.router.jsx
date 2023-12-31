import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/home_view";
import LoginView from "../../features/auth/views/login/login_view";
import PrivateRoute from "../../features/auth/components/private_route";
import PublicRoute from "../../features/auth/components/public_route";

//createBrowserRouter es una función que le va a decir a mi app de React que utilice la API nativa del navegador para las rutas.
export const appRouter = createBrowserRouter([
  //Recibe un arreglo de rutas, las rutas son objetos
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeView />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginView />
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
