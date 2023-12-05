import { useRef, useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Link,
} from "@nextui-org/react";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

const topRatedURL = "https://api.themoviedb.org/3/tv/top_rated";

export default function NetflixCards() {
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

  const [topRatedShows, setTopRatedShows] = useState([]);

  useEffect(() => {
    const getTopRatedShows = async () => {
      const response = await axios.get(topRatedURL, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDllYzM1NWZmMTgxZjkzMmU4NWZiMzgyYTA2M2IxOSIsInN1YiI6IjY1NGQzZjUzNjdiNjEzMDEzYzRiMTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I--KjLm0SHL6j7NJ_0RoFMfVDZIti-FPRf0JqFuObtI",
        },
      });
      setTopRatedShows(response.data.results);
      console.log(response);
    };
    getTopRatedShows();
  }, []);

  return (
    <>
      <Swiper
        navigation={true}
        // slidesPerView={5}
        // spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-6 m-5">
          {topRatedShows.map((show, index) => (
            <SwiperSlide>
              <Card
                shadow="sm"
                key={show.id}
                isPressable
                onPress={() => console.log("item pressed")}
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={show.name}
                    className="w-full object-cover"
                    src={`${"http://image.tmdb.org/t/p/original"}${
                      show.backdrop_path
                    }`}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{show.name}</b>
                  <Button as={Link} color="primary" href="#" variant="flat" className="text-white bg-[#E50914]">
                    Ver Trailer
                  </Button>
                  {/* <p className="text-default-500">{show.popularity}</p> */}
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
    // <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-5">
    //   {list.map((item, index) => (
    //     <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
    //       <CardBody className="overflow-visible p-0">
    //         <Image
    //           shadow="sm"
    //           radius="lg"
    //           width="100%"
    //           alt={item.title}
    //           className="w-full object-cover h-[140px]"
    //           src={item.img}
    //         />
    //       </CardBody>
    //       <CardFooter className="text-small justify-between">
    //         <b>{item.title}</b>
    //         <p className="text-default-500">{item.price}</p>
    //       </CardFooter>
    //     </Card>
    //   ))}
    // </div>
  );
}
