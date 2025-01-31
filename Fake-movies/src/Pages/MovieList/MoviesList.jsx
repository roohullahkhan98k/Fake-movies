import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { MovieCard, PaginationComponent, SearchBar, CenteredContainer, Sorting, Filtering } from "../../Components";
import { fetchMovies } from "../../api/apiService";

const MoviesList = () => {
  const [movies, setMovies] = useState([]); 
  const [currentMovies, setCurrentMovies] = useState([]); 

 
  const loadMovies = async (searchQuery) => {
    const data = await fetchMovies(searchQuery); 
    setMovies(data); 
    setCurrentMovies(data.slice(0, 5)); 
  };


  useEffect(() => {
    loadMovies(""); 
  }, []);

 
  const handleSearch = (searchQuery) => {
    loadMovies(searchQuery);
  };

  return (
    <CenteredContainer>
      <Box sx={{ display: "flex", alignItems: "center", padding: "1rem", width: "95%", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <Sorting movies={movies} setMovies={setMovies} />
          <Filtering movies={movies} setCurrentMovies={setCurrentMovies} />
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
