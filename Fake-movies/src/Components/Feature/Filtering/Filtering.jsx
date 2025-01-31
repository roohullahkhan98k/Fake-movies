import React, { useState } from "react";
import { Box } from "@mui/material";
import { CustomButton } from "../../Common/Button";
import { FilterModal } from "../../Common/modal";
import { genres,ratings } from "../../../Json/filteringOptions";
const Filtering = ({ movies, setCurrentMovies }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [year, setYear] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");

  const handleApplyFilters = () => {
    const filteredMovies = applyFilters(movies);
    setCurrentMovies(filteredMovies);
    setIsOpen(false);
  };

  const applyFilters = (movies) => {
    let filtered = [...movies];

    if (selectedGenres.length > 0) {
      filtered = filtered.filter((movie) =>
        selectedGenres.every((genre) => movie.genre.includes(genre))
      );
    }

    if (selectedRating) {
      const minRating = parseFloat(selectedRating);
      filtered = filtered.filter((movie) => movie.rating >= minRating);
    }

    if (year) {
      filtered = filtered.filter((movie) => movie.year === parseInt(year));
    }

    return filtered;
  };

  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <CustomButton onClick={() => setIsOpen(true)}>Filter</CustomButton>

      <FilterModal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        year={year}
        setYear={setYear}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        applyFilters={handleApplyFilters}
        genres={genres}  
        ratings={ratings} 
      />
    </Box>
  );
};

export default Filtering;
