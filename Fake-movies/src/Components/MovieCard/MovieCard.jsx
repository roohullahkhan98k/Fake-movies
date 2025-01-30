import React, { useState } from "react";
import { Card, CardMedia, Typography, Grid, Box, Button } from "@mui/material";
import bg from "../../assets/bg.jpg";

const MovieCard = ({ movie }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={2.4}
      sx={{ padding: 0, display: "flex", justifyContent: "center" }}
    >
      <Box sx={{ width: "70%", textAlign: "center" }}>
        <Card
          sx={{
            height: "350px",
            position: "relative",
            overflow: "hidden",
            border: "5px solid white",
            backgroundColor: "black",
            transition:
              "transform 0.3s ease-in-out, border-color 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.04)",
              borderColor: "#1976d2",
            },
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <CardMedia
            component="img"
            height="100%"
            image={bg}
            alt={movie.title}
            sx={{ width: "100%", objectFit: "cover" }}
          />

          {hovered && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="subtitle1">
                {" "}
                {movie.genre.join(", ")}
              </Typography>
              <Typography variant="subtitle1">
                Rating: ⭐ {movie.rating}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  position: "absolute",
                  bottom: "1.5rem",
                  backgroundColor: "#1976d2",
                  "&:hover": {
                    backgroundColor: "#1565c0",
                  },
                }}
              >
                View Details
              </Button>
            </Box>
          )}
        </Card>

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "white",
            marginTop: "10px",
            width: "100%",
            whiteSpace: "normal",
            wordWrap: "break-word",
            textAlign: "center",
          }}
        >
          {movie.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontWeight: "normal",
            color: "#B0B0B0",
            fontSize: "12px",
            marginTop: "2px",
          }}
        >
          {movie.year}
        </Typography>
      </Box>
    </Grid>
  );
};

export default MovieCard;
