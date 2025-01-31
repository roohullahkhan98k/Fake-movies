import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CustomTextField } from "../../Common/TextField";
import { CustomButton } from "../../Common/Button";

const Sorting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortQuery, setSortQuery] = useState("");

  return (
    <Box sx={{ mt: 2, mb: 2, height: "56px" }}>
      {isOpen ? (
        <Box display="flex" alignItems="center">
          <CustomTextField value={sortQuery} onChange={(e) => setSortQuery(e.target.value)} placeholder="Sort movies..." />
          <IconButton onClick={() => setIsOpen(false)} color="error">
            <CloseIcon />
          </IconButton>
        </Box>
      ) : (
        <CustomButton onClick={() => setIsOpen(true)}>Sorting</CustomButton>
      )}
    </Box>
  );
};

export default Sorting;
