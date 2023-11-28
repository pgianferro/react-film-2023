import {RouterProvider} from "react-router-dom";
import { appRouter } from './core/routes/app.router';
import RootProvider from './core/providers/root_provider';

// Swiper
import { register as registerSwiper} from 'swiper/element/bundle';
// register Swiper custom elements
registerSwiper();

const App = () => {
  return (
    <>
    <RootProvider>
      <RouterProvider router={appRouter}/>
    </RootProvider>
    </>
  )
}

export default App