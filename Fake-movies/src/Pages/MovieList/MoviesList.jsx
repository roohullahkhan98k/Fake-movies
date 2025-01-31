import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { MovieCard, PaginationComponent, SearchBar,CenteredContainer,Sorting,Filtering} from "../../Components";
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
    <CenteredContainer>
       <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          width: "95%",
          justifyContent: "space-between", 
        }}
      >
      
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <Sorting />
          <Filtering />
        </Box>
        <SearchBar onSearch={setSearchQuery} />

  
      </Box>
      <Grid sx={{ marginTop: "3rem" }} container spacing={2}>
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
