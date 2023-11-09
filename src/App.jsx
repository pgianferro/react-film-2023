import React from 'react'
import NetflixNavbar from './NetflixNavbar.jsx'
import NetflixImage from './NetflixImage.jsx'
import NetflixCards from './NetflixCards.jsx' 
import NetflixHeader from './NetflixHeader.jsx'
import { Divider, Spacer } from '@nextui-org/react'

const App = () => {
  return (
    <div>
      <NetflixNavbar></NetflixNavbar>
      <NetflixImage></NetflixImage>
      <Spacer y={10} ></Spacer>
      <NetflixHeader></NetflixHeader>
      <Divider className="my-4" />
      <NetflixCards></NetflixCards>
      <Spacer y={10} ></Spacer>
      </div>
  )
}

export default App