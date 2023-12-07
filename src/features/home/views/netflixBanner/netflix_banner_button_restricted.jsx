import React from 'react'
import { Button, Link, Image } from '@nextui-org/react'
import "../../../../index.css";

const NetflixBannerButtonRestricted = () => {
  return (
    <Button
    as={Link}
    color="primary"
    href="#"
    variant="flat"
    className="netflix-banner-button-restricted"
  > 16+
  </Button>
  )
}

export default NetflixBannerButtonRestricted