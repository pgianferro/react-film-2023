import { NetflixNavbar } from "../homeViewBarrel";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Image, Button, Link } from "@nextui-org/react";
import "../../../../index.css"


const ContentDetail = ({ match }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDllYzM1NWZmMTgxZjkzMmU4NWZiMzgyYTA2M2IxOSIsInN1YiI6IjY1NGQzZjUzNjdiNjEzMDEzYzRiMTdkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I--KjLm0SHL6j7NJ_0RoFMfVDZIti-FPRf0JqFuObtI",
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!movie) {
    return <p>No movie data available.</p>;
  }

  return (
    <>
      <NetflixNavbar></NetflixNavbar>
    <div className="content-detail-container">
      <div className="center-content">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={movie.name}
          className="w-full object-cover"
          src={`${"http://image.tmdb.org/t/p/original"}${movie.backdrop_path}`}
        />
        <h1>{movie.name}</h1>
        <p>{movie.overview}</p>
        <Button
    as={Link}
    color="primary"
    href="/"
    variant="flat"
  >Volver
  </Button>
        {/* Add more details or components as needed */}
      </div>
    </div>
    </>
  );
};

export default ContentDetail;
