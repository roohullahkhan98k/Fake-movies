import React from "react";
import { TextField, Box, MenuItem } from "@mui/material";

const CustomTextField = ({ value, onChange, placeholder, select, options = [] }) => {
  return (
    <Box>
      <TextField
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        select={select}
        sx={{
          width: "20rem",
          borderRadius: "8px",
          backgroundColor: "#1d1d1d",
          color: "white",
          "& .MuiInputBase-input": { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "#1976d2" },
            "&.Mui-focused fieldset": { borderColor: "#1976d2" },
          },
          "& .MuiSelect-icon": {
            color: "white", 
          },
        }}
      
        SelectProps={{
          MenuProps: {
            PaperProps: {
              sx: {
                backgroundColor: "transparent", 
                border: "1px solid white", 
                color: "white", 
                "& .MuiMenuItem-root": {
                  backgroundColor: "transparent", 
                  "&:hover": { backgroundColor: "#1976d2" }, 
                },
              },
            },
          },
        }}
      >
        {select &&
          options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                backgroundColor: "transparent", 
                "&:hover": { backgroundColor: "#1976d2" }, 
              }}
            >
              {option.label}
            </MenuItem>
          ))}
      </TextField>
    </Box>
  );
};

export default CustomTextField;