import React from 'react'
import { NavbarItem, Link} from "@nextui-org/react";

const Inicio = () => {
  return (
    <div>
      <NavbarItem>
        <Link color="foreground" href="/">
          Inicio
        </Link>
      </NavbarItem>
    </div>
  )
}

export default Inicio