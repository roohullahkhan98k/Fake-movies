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
  const [itemsPerPage] = useState(5);

  const loadMovies = async (searchQuery) => {
    const data = await fetchMovies(searchQuery); 
    setMovies(data); 
    setCurrentMovies(data.slice(0, itemsPerPage)); 
  };

  useEffect(() => {
    loadMovies(""); 
  }, []);

  const handleSearch = (searchQuery) => {
    loadMovies(searchQuery);
  };

  const resetFilteringAndSorting = () => {
    setCurrentMovies(movies.slice(0, itemsPerPage)); 
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
      <PaginationComponent 
        items={movies} 
        itemsPerPage={itemsPerPage} 
        onPageChange={setCurrentMovies} 
      />
    </CenteredContainer>
  );
};

export default MoviesList;