import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/home_view";
import LoginView from "../../features/login/login_view";



//createBrowserRouter es una función que le va a decir a mi app de React que utilice la API nativa del navegador para las rutas.
export const appRouter = createBrowserRouter ([
    //Recibe un arreglo de rutas, las rutas son objetos
    {
        path:"/",
        Component: HomeView
    },
    {
        path:"/login",
        Component: LoginView
    }
])
