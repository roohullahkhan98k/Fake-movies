import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <Box
      sx={{
        marginBottom: "20px",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end", // Align to the right
        paddingRight: "20px", // Add spacing from the right
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search movies..."
        value={query}
        onChange={handleSearch}
        sx={{
          width: "30%", 
          borderRadius: "8px", 
          backgroundColor: "#f5f5f5", 
          boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)", 
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#9e9e9e", 
            },
            "&:hover fieldset": {
              borderColor: "#1976d2", 
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1976d2",
            },
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
