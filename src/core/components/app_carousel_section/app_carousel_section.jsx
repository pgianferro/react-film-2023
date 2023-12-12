import React from "react";
import { AppSwiper } from "../app_swiper/app_swiper";
import AppSwiperSlide from "../app_swiper/components/app_swiper_slide";
import AppTitle from "../app_title/app_title";
import { useFavorites } from "../../hooks/useFavorites";

const AppCarouselSection = ({ title, data }) => {

  const {removeFavorite, addFavorite, isFavorite} = useFavorites();

  return (
    <>
      <AppTitle>{title}</AppTitle>
      <AppSwiper>
        {data?.map((e) => (
          <AppSwiperSlide key={e.id}>
            <div
            onClick={() => {
              if(isFavorite(e)) {
                removeFavorite(e);
              } else {
                addFavorite(e);
              }
            }}
              style={{
                height: "150px",
                width: "250px",
                backgroundImage: `url(${e.backdrop})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h3>{e.title}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
    </>
  );
};

export default AppCarouselSection;
