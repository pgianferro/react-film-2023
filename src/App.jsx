import React from 'react'
import NetflixNavbar from './NetflixNavbar.jsx'
import NetflixImage from './NetflixImage.jsx'
import MovieCard from './MovieCard.jsx' 

const App = () => {
  return (
    <div>
      <NetflixNavbar></NetflixNavbar>
      <NetflixImage></NetflixImage>
      <MovieCard></MovieCard>
      </div>
  )
}

export default App