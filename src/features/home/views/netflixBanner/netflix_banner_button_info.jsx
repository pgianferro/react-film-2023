import React from 'react'
import { Button, Link } from '@nextui-org/react'
import "../../../../index.css";

const NetflixBannerButtonInfo = () => {
  return (
    <Button
    as={Link}
    color="primary"
    href="#"
    variant="flat"
    className="netflix-banner-button-info"
  > ⓘ Más información
  </Button>
  )
}

export default NetflixBannerButtonInfo