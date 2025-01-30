import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const MovieCard = ({ movie }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
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
  );
};

export default MovieCard;
