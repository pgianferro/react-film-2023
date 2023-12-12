import {RouterProvider} from "react-router-dom";
import { appRouter } from './core/routes/app.router';
import RootProvider from './core/providers/root_provider';

// Swiper
import { register as registerSwiper} from 'swiper/element/bundle';
// register Swiper custom elements
registerSwiper();

const App = () => {
  return (
<<<<<<<<< Temporary merge branch 1
    <div>
<<<<<<<<< Temporary merge branch 1
      <h1>App React Film</h1>
      <h2>ESTO ES QA</h2>
=========
      <NetflixNavbar></NetflixNavbar>
      <NetflixImage></NetflixImage>
      <Spacer y={10} ></Spacer>
      <NetflixHeader></NetflixHeader>
      <Divider className="my-4" />
      <NetflixCards></NetflixCards>
      <Spacer y={10} ></Spacer>
>>>>>>>>> Temporary merge branch 2
      </div>
=========
    <div>App React Film 2023</div>
>>>>>>>>> Temporary merge branch 2
  )
}

export default App
