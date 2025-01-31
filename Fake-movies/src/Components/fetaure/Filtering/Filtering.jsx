import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CustomTextField } from "../../Common/TextField";
import { CustomButton } from "../../Common/Button";

const Filtering = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");

  return (
    <Box sx={{ mt: 2, mb: 2, height: "56px" }}>
      {isOpen ? (
        <Box display="flex" alignItems="center">
          <CustomTextField value={filterQuery} onChange={(e) => setFilterQuery(e.target.value)} placeholder="Filter movies..." />
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
