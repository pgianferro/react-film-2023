import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function MovieCard() {
  const list = [
    {
      title: "The Office",
      img: "https://occ-0-3792-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABewOFR5Jlqgh3RVbdCdopJZ95rW9HyMcSYNwvWU_WhjClEVl-fwxbBESRx14DLesMXLT9_xxM0XjfEeqr83ANHBAWsCGU81jBQU.webp?r=05d",
      price: "VER TRAILER",
    },
    {
      title: "Peaky Blinders",
      img: "https://occ-0-3792-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeqfT2_-pIeAnhkqj0GpudyhvXhx94AqyF9tkpneVdXu-3OATs6WlyyJJGhDCI9f8aYJJShAluJXN888F2NuB1cdlle-7Ky89bq8VkR-ilzL8yy5sT_4nUedoHC5jun8INFE.jpg?r=a07",
      price: "VER TRAILER",
    },
    {
        title: "The Office",
        img: "https://occ-0-3792-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABewOFR5Jlqgh3RVbdCdopJZ95rW9HyMcSYNwvWU_WhjClEVl-fwxbBESRx14DLesMXLT9_xxM0XjfEeqr83ANHBAWsCGU81jBQU.webp?r=05d",
        price: "VER TRAILER",
      },
      {
        title: "Peaky Blinders",
        img: "https://occ-0-3792-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeqfT2_-pIeAnhkqj0GpudyhvXhx94AqyF9tkpneVdXu-3OATs6WlyyJJGhDCI9f8aYJJShAluJXN888F2NuB1cdlle-7Ky89bq8VkR-ilzL8yy5sT_4nUedoHC5jun8INFE.jpg?r=a07",
        price: "VER TRAILER",
      },
      {
        title: "The Office",
        img: "https://occ-0-3792-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABewOFR5Jlqgh3RVbdCdopJZ95rW9HyMcSYNwvWU_WhjClEVl-fwxbBESRx14DLesMXLT9_xxM0XjfEeqr83ANHBAWsCGU81jBQU.webp?r=05d",
        price: "VER TRAILER",
      },
      {
        title: "Peaky Blinders",
        img: "https://occ-0-3792-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeqfT2_-pIeAnhkqj0GpudyhvXhx94AqyF9tkpneVdXu-3OATs6WlyyJJGhDCI9f8aYJJShAluJXN888F2NuB1cdlle-7Ky89bq8VkR-ilzL8yy5sT_4nUedoHC5jun8INFE.jpg?r=a07",
        price: "VER TRAILER",
      },
      {
        title: "The Office",
        img: "https://occ-0-3792-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABewOFR5Jlqgh3RVbdCdopJZ95rW9HyMcSYNwvWU_WhjClEVl-fwxbBESRx14DLesMXLT9_xxM0XjfEeqr83ANHBAWsCGU81jBQU.webp?r=05d",
        price: "VER TRAILER",
      },
      {
        title: "Peaky Blinders",
        img: "https://occ-0-3792-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeqfT2_-pIeAnhkqj0GpudyhvXhx94AqyF9tkpneVdXu-3OATs6WlyyJJGhDCI9f8aYJJShAluJXN888F2NuB1cdlle-7Ky89bq8VkR-ilzL8yy5sT_4nUedoHC5jun8INFE.jpg?r=a07",
        price: "VER TRAILER",
      },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-5">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

