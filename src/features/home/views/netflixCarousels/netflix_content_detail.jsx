import { NetflixNavbar } from "../homeViewBarrel";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Image, Button, Link, Spacer } from "@nextui-org/react";
import "../../../../index.css";

const ContentDetail = () => {
  const { id, type } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let response;
        if (type === "show") {
          response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?language=es-ES`, {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDllYzM1NWZmMTgxZjkzMmU4NWZiMzgyYTA2M2IxOSIsInN1YiI6IjY1NGQzZjUzNjdiNjEzMDEzYzRiMTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I--KjLm0SHL6j7NJ_0RoFMfVDZIti-FPRf0JqFuObtI",
            },
          });
          setContent(response.data);
        } else if (type === "movie") {
          response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDllYzM1NWZmMTgxZjkzMmU4NWZiMzgyYTA2M2IxOSIsInN1YiI6IjY1NGQzZjUzNjdiNjEzMDEzYzRiMTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I--KjLm0SHL6j7NJ_0RoFMfVDZIti-FPRf0JqFuObtI",
            },
          });
          setContent(response.data);
        }
        console.log(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [id, type]);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!content) {
    return <p>No movie or show data available.</p>;
  }

  return (
    <>
      {/* <NetflixNavbar></NetflixNavbar> */}
      <div className="content-detail-container">
        <div className="center-content">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={content?.name || content?.title}
            className="w-full object-cover"
            src={`${"http://image.tmdb.org/t/p/original"}${content.backdrop_path}`}
          />
          <Spacer y={10}></Spacer>
          <h1 className="text-4xl font-bold">{content?.name || content?.title}</h1>
          <Spacer y={10}></Spacer>
          {content.overview}
          <Spacer y={10}></Spacer>
          <Button
            as={Link}
            className="text-white bg-[#E50914]"
            href="/"
            variant="flat"
          >
            Volver
          </Button>
          {/* Add more details or components as needed */}
        </div>
      </div>
    </>
  );
};

export default ContentDetail;