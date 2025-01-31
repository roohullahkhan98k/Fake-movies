import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CustomButton } from "../../Common/Button";
import { CustomTextField } from "../../Common/TextField";
import { sortingFields, sortOrders } from "../../../Json/sortingOptions";

const Sorting = ({ movies, setMovies, resetSorting }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isSorted, setIsSorted] = useState(false);

  const handleSort = () => {
    const sortedMovies = [...movies].sort((a, b) => {
      let compareValueA, compareValueB;

      if (sortField === "rating" || sortField === "year") {
        compareValueA = a[sortField];
        compareValueB = b[sortField];
      } else {
        compareValueA = a.title.toLowerCase();
        compareValueB = b.title.toLowerCase();
      }

      return sortOrder === "asc"
        ? compareValueA < compareValueB
          ? -1
          : 1
        : compareValueA > compareValueB
        ? -1
        : 1;
    });

    setMovies(sortedMovies);
    setIsSorted(true); // Set sorting as applied
    setIsOpen(false);
  };

  const handleRemoveSorting = () => {
    resetSorting();
    setIsSorted(false); 
  };

  return (
    <Box sx={{ mt: 2, mb: 2, height: "56px" }}>
      {isOpen ? (
        <Box display="flex" alignItems="center" gap={2}>
          <CustomTextField
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            select
            options={sortingFields} 
          />

          <CustomTextField
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            select
            options={sortOrders} 
          />

          <CustomButton onClick={handleSort}>Apply</CustomButton>

          <IconButton onClick={() => setIsOpen(false)} color="error">
            <CloseIcon />
          </IconButton>
        </Box>
      ) : (
        <CustomButton onClick={() => setIsOpen(true)}>Sorting</CustomButton>
      )}

    
      {isSorted && (
        <CustomButton onClick={handleRemoveSorting}  isRemoveButton={true} >Remove Sorting</CustomButton>
      )}
    </Box>
  );
};

export default Sorting;
