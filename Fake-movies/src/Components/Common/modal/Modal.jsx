import React from "react";
import { Box, IconButton, Checkbox, FormControlLabel, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CustomButton } from "../Button";
import { CustomTextField } from "../TextField";

const FilterModal = ({
  isOpen,
  handleClose,
  year,
  setYear,
  selectedGenres,
  setSelectedGenres,
  selectedRating,
  setSelectedRating,
  applyFilters,
  genres,
  ratings
}) => {
  const handleGenreChange = (event) => {
    const genre = event.target.value;
    const newGenres = [...selectedGenres];
  
    if (newGenres.includes(genre)) {
      // If the genre is already selected, remove it
      setSelectedGenres(newGenres.filter((g) => g !== genre));
    } else {
      // If the genre is not selected, add it
      setSelectedGenres([...newGenres, genre]);
    }
  };
  
  const handleRatingChange = (event) => {
    const rating = event.target.value;
    const newRatings = [...selectedRating];
  
    if (newRatings.includes(rating)) {
      
      setSelectedRating(newRatings.filter((r) => r !== rating));
    } else {

      setSelectedRating([...newRatings, rating]);
    }
  };
  

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          backgroundColor: "transparent", padding: "2rem", width: "300px", borderRadius: "8px", boxShadow: 24,
          backdropFilter: "blur(10px)"
        }}
      >
        <Typography variant="h6" id="filter-modal-title" sx={{ color: "white" }}>Filter Movies</Typography>

        <Box sx={{ mt: 2 }}>
          <CustomTextField
            label="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            type="number"
            fullWidth
            placeholder="Filter by year"
            InputLabelProps={{ style: { color: 'white' } }}
            inputProps={{ style: { color: 'white' } }}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ color: "white" }}>Genres</Typography>
          {genres.map((genre) => (
            <FormControlLabel
              key={genre}
              control={
                <Checkbox
                  value={genre}
                  checked={selectedGenres.includes(genre)}
                  onChange={handleGenreChange}
                  sx={{ color: 'white' }}
                />
              }
              label={<Typography sx={{ color: "white" }}>{genre}</Typography>}
            />
          ))}
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ color: "white" }}>Rating</Typography>
          {ratings.map((rating) => (
            <FormControlLabel
              key={rating}
              control={
                <Checkbox
                  value={rating}
                  checked={selectedRating.includes(rating)} 
                  onChange={handleRatingChange} 
                  sx={{ color: 'white' }}
                />
              }
              label={<Typography sx={{ color: "white" }}>{`${rating}`}</Typography>}
            />
          ))}
        </Box>

        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <CustomButton onClick={applyFilters}>
            Apply Filters
          </CustomButton>
          <IconButton onClick={handleClose} color="error">
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default FilterModal;
