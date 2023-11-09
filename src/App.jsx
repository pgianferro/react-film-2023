import React from 'react'
import NetflixNavbar from '../components/netflixnavbar/NetflixNavbar.jsx'
import NetflixImage from '../components/netfliximage/NetflixImage.jsx'
import NetflixCards from '../components/netflixcards/NetflixCards.jsx' 
import NetflixHeader from '../components/netflixheader/NetflixHeader.jsx'
import { Divider, Spacer } from '@nextui-org/react'
import Login from '../components/log_in/Login'

const App = () => {
  return (
    <div>
      <Login></Login>
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