import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Image} from "@nextui-org/react";
import * as index from "../navbarItems/navbarItemBarrel/index.js";

// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function NetflixNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Inicio",
    "Series",
    "Peliculas",
    "Novedades populares",
    "Mi lista",
    "Explora por idiomas",
  ];

  return (
    <>
      <Navbar className="bg-[transparent]" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <index.Logo></index.Logo>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <index.Inicio></index.Inicio>
          <index.Series></index.Series>
          <index.Peliculas></index.Peliculas>
          <index.NovedadesPopulares></index.NovedadesPopulares>
          <index.MiLista></index.MiLista>
          <index.ExploraPorIdioma></index.ExploraPorIdioma>
        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">
        <index.Buscador></index.Buscador>
        <index.Notificaciones></index.Notificaciones>
        {/* <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        <index.Perfil></index.Perfil>
      </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "red"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
