import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";
import { PaginationComponent } from "./Pagination";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get("https://freetestapi.com/api/v1/movies");
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handlePageChange = (currentItems) => {
    setCurrentMovies(currentItems);
  };

  return (
    <Box sx={{ padding: "20px",marginTop:"8rem", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <Grid container spacing={2} justifyContent="center">
        {currentMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={movie.poster || "roohi.jpg"}
                alt={movie.title}
              />
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {movie.genre ? movie.genre.join(", ") : "N/A"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <PaginationComponent
        items={movies}
        itemsPerPage={6}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default Movies;
