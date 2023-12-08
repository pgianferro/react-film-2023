import React from 'react'
import { NavbarBrand, Image } from "@nextui-org/react";

const Logo = () => {
  return (
    <NavbarBrand>
            <Image
              width={100}
              alt="NextUI hero Image"
              src="netflix-logo.png"
            />
            {/* <AcmeLogo/> */}
            {/* <p className="font-bold text-inherit">ACME</p> */}
          </NavbarBrand>
  )
}

export default Logo