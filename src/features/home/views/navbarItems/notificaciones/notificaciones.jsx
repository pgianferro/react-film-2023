import React from 'react'
import { NavbarItem, Image} from "@nextui-org/react";

const Notificaciones = () => {
  return (
    <div>
          <NavbarItem >
            <Image
              width={40}
              alt="avatar image"
              src="../public/netflix-notifications.png"
              radius="sm"
              style={{ cursor: 'pointer' }}
            />
          </NavbarItem>
    </div>
  )
}

export default Notificaciones