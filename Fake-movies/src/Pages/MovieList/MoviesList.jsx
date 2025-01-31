import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { 
  MovieCard, 
  PaginationComponent, 
  SearchBar, 
  CenteredContainer, 
  Sorting, 
  Filtering 
} from "../../Components";
import { fetchMovies } from "../../api/apiService";

const MoviesList = () => {
  const [movies, setMovies] = useState([]); 
  const [currentMovies, setCurrentMovies] = useState([]); 
  const [filterRemoved, setFilterRemoved] = useState(false);

  const loadMovies = async (searchQuery) => {
    const data = await fetchMovies(searchQuery); 
    setMovies(data); 
    setCurrentMovies(data); 
  };

  useEffect(() => {
    loadMovies(""); 
  }, []);

  useEffect(() => {
    if (filterRemoved) {
      loadMovies(""); 
      setFilterRemoved(false);
    }
  }, [filterRemoved]);

  const handleSearch = (searchQuery) => {
    loadMovies(searchQuery);
  };

  const resetFilteringAndSorting = () => {
    setCurrentMovies(movies); 
    setFilterRemoved(true);
  };

  return (
    <CenteredContainer>
      <Box sx={{ display: "flex", alignItems: "center", padding: "1rem", width: "95%", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <Sorting movies={movies} setMovies={setMovies} resetSorting={resetFilteringAndSorting} />
          <Filtering movies={movies} setCurrentMovies={setCurrentMovies} resetFiltering={resetFilteringAndSorting} />
        </Box>
        <SearchBar onSearch={handleSearch} />
      </Box>
      <Grid sx={{ marginTop: "3rem" }} container spacing={2}>
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
      <PaginationComponent items={movies} itemsPerPage={5} onPageChange={setCurrentMovies} />
    </CenteredContainer>
  );
};

export default MoviesList;
