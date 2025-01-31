import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ onClick, children, isRemoveButton = false }) => {
  return (
    <Button
      variant="text"
      onClick={onClick}
      sx={{
        textTransform: "none",
        color: isRemoveButton ? "red" : "white", 
        border: isRemoveButton ? "none" : "2px solid white", 
        borderRadius: "8px",
        padding: "6px 16px",
        transition: "border-color 0.3s ease-in-out",
        "&:hover": {
          borderColor: isRemoveButton ? "transparent" : "#1976d2", 
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
