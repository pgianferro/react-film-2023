import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  NavbarItem,
  Link,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useFavorites } from "../../../../../core/hooks/useFavorites";

const MiLista = () => {
  const { favorites } = useFavorites();
  console.log("Favorites", favorites);

  return (
    <div>
      <Dropdown>
        <NavbarItem>
          <DropdownTrigger>
            <Link as="button" color="foreground" className="text-normal">
              Mi lista
            </Link>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          aria-label="ACME features"
          className="w-[340px]"
          itemClasses={{
            base: "gap-4",
          }}
        >
          {favorites?.map((e) => (
            <DropdownItem
              key={e.id}
              // description="ACME scales apps to meet user demand, automagically, based on load."
            >
              <RouterLink
                to={`/content/${e.type}/${e.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="flex items-center gap-2">
                  <Avatar
                    src={`${"http://image.tmdb.org/t/p/original"}${e.backdrop}`}
                  ></Avatar>
                  {e.title}
                </div>
              </RouterLink>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default MiLista;
