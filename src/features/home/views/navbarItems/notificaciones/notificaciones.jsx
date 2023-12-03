import React from 'react'
import { NavbarItem, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, Image } from "@nextui-org/react";
import "../../../../../index.css";


const Notificaciones = () => {
  return (
    <div>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            // isBordered
            as="button"
            className="transition-transform"
            // color="secondary"
            name="Jason Hughes"
            size="sm"
            src="../public/netflix-notifications.png"
            background-color="transparent"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="settings">❗Se ha agregado una nueva Serie</DropdownItem>
          <DropdownItem key="team_settings">❗Continuar Viendo tu serie favorita</DropdownItem>
          <DropdownItem key="analytics">❗Se ha agregado una nueva película</DropdownItem>
        </DropdownMenu>
      </Dropdown>
          {/* <NavbarItem >
            <Image
              width={40}
              alt="avatar image"
              src="../public/netflix-notifications.png"
              radius="sm"
              style={{ cursor: 'pointer' }}
            />
          </NavbarItem> */}
    </div>
  )
}

export default Notificaciones