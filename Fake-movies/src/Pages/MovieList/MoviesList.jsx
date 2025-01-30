import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { MovieCard, PaginationComponent, SearchBar } from "../../Components";
import { fetchMovies } from "../../api/apiService";
import CenteredContainer from "../../Components/Layout/CenteredContainer/CenteredContainer";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(searchQuery);
      setMovies(data);
    };

    loadMovies();
  }, [searchQuery]);

  return (
    <CenteredContainer>
      <SearchBar onSearch={setSearchQuery} />
      <Grid sx={{ marginTop: "15vh" }} container spacing={2}>
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
      <PaginationComponent
        items={movies}
        itemsPerPage={5}
        onPageChange={setCurrentMovies}
      />
    </CenteredContainer>
  );
};

export default MoviesList;
