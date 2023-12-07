import React from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Link,
} from "@nextui-org/react";

import {HeartIcon} from './HeartIcon';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { AppSwiper } from "../../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../../core/components/app_swiper/components/app_swiper_slide";

const NetflixCarrousel = ({ title, data }) => {
  return (
    <>
      <h1 className="netflix-header">{title}</h1>
      {/* <AppSwiper>
        {data?.map((e) => (
          <AppSwiperSlide key={e.id}>
            <div
              style={{
                height: "150px",
                width: "250px",
                backgroundImage:`url(${e.backdrop})`,
                backgroundSize: "contain",
                backgroundRepeat:"no-repeat",
                backgroundPosition:"center"
              }}
            >
              <h3>{e.title}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper> */}

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
          {data?.map((e) => (
            <SwiperSlide>
              <Card
                shadow="sm"
                key={e.id}
                isPressable
                onPress={() => console.log("item pressed")}
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={e.title}
                    className="w-full object-cover"
                    src={`${"http://image.tmdb.org/t/p/original"}${
                      e.backdrop
                    }`}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{e.title}</b>
                  <Button
                    // as={Link}
                    // color="primary"
                    // href="#"
                    // variant="flat"
                    className="text-white bg-[#E50914]"
                    // radius="sm"
                    isIconOnly color="danger" aria-label="Like"
                  >
                    <HeartIcon />
                  </Button>
                  {/* <p className="text-default-500">{show.popularity}</p> */}
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

    </>
  );
};

export default NetflixCarrousel;
