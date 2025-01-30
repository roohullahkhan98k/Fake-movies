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
        width: "95%",
        display: "flex",
        justifyContent: "flex-end", 
        position: "relative",
        top: "7vh",
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
          backgroundColor: "#1d1d1d", 
          input: { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", 
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
