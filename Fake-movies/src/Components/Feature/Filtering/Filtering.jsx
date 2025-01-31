import React, { useState } from "react";
import { Box, IconButton, MenuItem, Select } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CustomButton } from "../../Common/Button";

const Filtering = ({ onFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleApplyFilter = () => {
    onFilter(selectedGenre); // Pass the selected genre to the parent component
    setIsOpen(false); // Close the filter dropdown
  };

  return (
    <Box sx={{ mt: 2, mb: 2, height: "56px" }}>
      {isOpen ? (
        <Box display="flex" alignItems="center" gap={2}>
          {/* Genre Dropdown */}
          <Select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            displayEmpty
            sx={{
              width: "10rem",
              backgroundColor: "#1d1d1d",
              color: "white",
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
              "& .MuiSelect-icon": { color: "white" }, // White dropdown arrow
            }}
          >
            <MenuItem value="" disabled>
              Select Genre
            </MenuItem>
            <MenuItem value="Drama">Drama</MenuItem>
            <MenuItem value="Action">Action</MenuItem>
            <MenuItem value="Comedy">Comedy</MenuItem>
            <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
            <MenuItem value="Horror">war</MenuItem>
          </Select>

          {/* Apply Button */}
          <CustomButton onClick={handleApplyFilter}>Apply</CustomButton>

          {/* Close Button */}
          <IconButton onClick={() => setIsOpen(false)} color="error">
            <CloseIcon />
          </IconButton>
        </Box>
      ) : (
        <CustomButton onClick={() => setIsOpen(true)}>Filtering</CustomButton>
      )}
    </Box>
  );
};

export default Filtering;