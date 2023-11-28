import React from "react";
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import * as index from '../navbarItems/navbarItemBarrel/index.js';


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
    "Perfil",
    "Notificaciones",
  ];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Image
              width={100}
              alt="NextUI hero Image"
              src="../public/netflix-logo.png"
            />
            {/* <AcmeLogo/> */}
            {/* <p className="font-bold text-inherit">ACME</p> */}
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <index.Inicio></index.Inicio>
          <index.Series></index.Series>
          <index.Peliculas></index.Peliculas>
          <index.NovedadesPopulares></index.NovedadesPopulares>
          <index.MiLista></index.MiLista>
          <index.ExploraPorIdioma></index.ExploraPorIdioma>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Get User</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Cerrar Sesión
            </Button>
          </NavbarItem>
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
