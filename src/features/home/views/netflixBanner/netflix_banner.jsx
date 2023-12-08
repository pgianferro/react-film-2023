import React from "react";
import ReactPlayer from "react-player";
import { NetflixNavbar } from "../homeViewBarrel";
import { Button, Link } from '@nextui-org/react'
import "../../../../index.css";
import NetflixBannerHeader from "./netflix_banner_header";
import NetflixBannerSubHeader from "./netflix_banner_subheader";
import NetflixBannerButtonPlay from "./netflix_banner_button_play";
import NetflixBannerButtonInfo from "./netflix_banner_button_info";
import NetflixBannerButtonSound from "./netflix_banner_button_sound";
import NetflixBannerButtonRestricted from "./netflix_banner_button_restricted";


const NetflixBanner = () => {
  const videos = [
    "https://www.youtube.com/watch?v=dzQtWkpc2-c",
    "https://www.youtube.com/watch?v=zTY3ZskC99g",
    "https://www.youtube.com/watch?v=g8evyE9TuYk",
  ];

  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  return (
    <>
      <section className="banner-section"
      >
        <ReactPlayer
        className="banner-reactPlayer"
          muted={true}
          playing={true}
          controls={false}
          autoplay={true}
          width="100%"
          height="100%"
          objectfit="cover"
          url={randomVideo}
          modestbranding={true}
          name={false}
          watchLaterButton={false}
          shareButton={false}
        ></ReactPlayer>
        <NetflixBannerHeader></NetflixBannerHeader>
        <NetflixBannerSubHeader></NetflixBannerSubHeader>
        <NetflixBannerButtonPlay></NetflixBannerButtonPlay>
        <NetflixBannerButtonInfo></NetflixBannerButtonInfo>
        <NetflixBannerButtonSound></NetflixBannerButtonSound>
        <NetflixBannerButtonRestricted></NetflixBannerButtonRestricted>
      </section>
    </>
  );
};

export default NetflixBanner;
