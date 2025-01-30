import React, { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { MovieCard, PaginationComponent, SearchBar } from "../../Components";
import { fetchMovies } from "../../api/apiService";

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
    <Box sx={{ padding: "20px", marginTop: "5rem", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <SearchBar onSearch={setSearchQuery} />  
      <Grid container spacing={2} justifyContent="center">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
      <PaginationComponent items={movies} itemsPerPage={6} onPageChange={setCurrentMovies} />
    </Box>
  );
};

export default MoviesList;
