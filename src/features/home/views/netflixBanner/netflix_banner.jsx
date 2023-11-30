import React from "react";
import ReactPlayer from "react-player";
import { NetflixNavbar } from "../homeViewBarrel";
import { Button, Link } from '@nextui-org/react'

const NetflixBanner = () => {
  const videos = [
    "https://www.youtube.com/watch?v=dzQtWkpc2-c",
    "https://www.youtube.com/watch?v=zTY3ZskC99g",
    "https://www.youtube.com/watch?v=g8evyE9TuYk",
  ];

  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  return (
    <>
      <section
        style={{
          position: "relative",
          paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */,
          margin: "-100px 0 -180px 0",
        }}
      >
        <ReactPlayer
          style={{
            position: "absolute",
            top: "0",
            left: "0",
          }}
          muted={true}
          playing={true}
          controls={false}
          autoplay={true}
          width="100%"
          height="100%"
          objectFit="contain"
          url={randomVideo}
          modestbranding={true}
          name={false}
          watchLaterButton={false}
          shareButton={false}
        ></ReactPlayer>
        <h1
        className="hero-title"
        style={{
          position: "absolute",
          top: "60%",
          left: "5%",
          // transform: "translate(-50%, -50%)",
          fontSize: "50px",
          fontFamily: "Helvetica Neue",
          color: "white",
          fontWeight: 700,
        }}
      >
        EL CABALLERO DE LA NOCHE
      </h1>
      <Button style={{
          position: "absolute",
          top: "70%",
          left: "5%",}}
        as={Link}
        color="primary"
        href="#"
        variant="flat"
        className="text-white bg-[#E50914]"
      >
        Ver ahora
      </Button>
      </section>
    </>
  );
};

export default NetflixBanner;
