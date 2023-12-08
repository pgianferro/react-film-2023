import React from 'react'
import { Button, Link } from '@nextui-org/react'
import "../../../../index.css";

const NetflixBannerButtonPlay = () => {
  return (
    <Button
    as={Link}
    color="primary"
    href="#"
    variant="flat"
    className="netflix-banner-button-play"
  > ▶ Reproducir
  </Button>
  )
}

export default NetflixBannerButtonPlay