import React, { useEffect } from "react";
import MovieList from "../movieListing/MovieList";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../featurs/movies/movieSlice";

const Home = () => {
  //
  const movieText = "Harry";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Error:", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieList />
    </div>
  );
};

export default Home;
