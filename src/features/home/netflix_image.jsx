import React from "react";
// import {Image} from "@nextui-org/react";

// export default function NetflixImage() {
//   return (
//     <Image
//     isZoomed
//       alt="NextUI hero Image"
//       src="../public/netflix-background.png"
//     />
//   );
// }

import ReactPlayer from "react-player";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Link,
} from "@nextui-org/react";

const App = () => {
  const videos = [
    "https://www.youtube.com/watch?v=dzQtWkpc2-c",
    "https://www.youtube.com/watch?v=zTY3ZskC99g",
    "https://www.youtube.com/watch?v=g8evyE9TuYk",
  ];

  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  return (
    <section className="hero-section">
      <ReactPlayer
        muted={true}
        playing={true}
        controls={false}
        autoplay={true}
        width="100%"
        height={440}
        url={randomVideo}
        objectFit="cover"
      />
      <h1
        className="hero-title"
        style={{
          position: "absolute",
          top: "50%",
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
          top: "60%",
          left: "5%",}}
        as={Link}
        color="primary"
        href="#"
        variant="flat"
        className="text-white bg-[#E50914]"
      >
        Reproducir
      </Button>
    </section>

    // <div>
    //   <ReactPlayer
    //     muted={true}
    //     playing={true}
    //     controls={false}
    //     autoplay={true}
    //     width='100%'
    //     height={440}
    //     url={randomVideo}
    //   />
    // </div>
  );
};

export default App;
