import React from "react";
import { TextField, Box } from "@mui/material";

const CustomTextField = ({ value, onChange, placeholder }) => {
  return (
    <Box>
      <TextField
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        sx={{
          width: "20rem",
          borderRadius: "8px",
          backgroundColor: "#1d1d1d",
          input: { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "#1976d2" },
            "&.Mui-focused fieldset": { borderColor: "#1976d2" },
          },
        }}
      />
    </Box>
  );
};

export default CustomTextField;
