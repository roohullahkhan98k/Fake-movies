import React, { useState, useEffect } from "react";
import { Pagination, IconButton, TextField, Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const PaginationComponent = ({ items, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItemsPerPage, setCurrentItemsPerPage] = useState(itemsPerPage);

  const indexOfLastItem = currentPage * currentItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - currentItemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value); 
    onPageChange(currentItems); 
  };

  const handleIncreaseItemsPerPage = () => {
    setCurrentItemsPerPage(prev => prev + 1); 
    setCurrentPage(1);
  };

  const handleDecreaseItemsPerPage = () => {
    setCurrentItemsPerPage(prev => (prev > 1 ? prev - 1 : prev)); 
    setCurrentPage(1); 
  };

  useEffect(() => {
    onPageChange(currentItems); 
  }, [currentPage, currentItemsPerPage, items]);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "10px 20px",
         margin: "20px 0",
        }}
      >
        <Typography variant="body2" sx={{ marginBottom: "10px" }}>
          Items per page
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={handleDecreaseItemsPerPage} color="primary">
            <RemoveIcon />
          </IconButton>

          <TextField
            value={currentItemsPerPage}
            onChange={(e) => setCurrentItemsPerPage(Number(e.target.value))}
            inputProps={{
              style: {
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "18px",
              },
            }}
            placeholder="Items per page"
            type="number"
            sx={{
              width: "80px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "18px",
              backgroundColor: "#fff",
              borderRadius: "4px",
              margin: "0 10px",
              padding: "5px",
            }}
          />

          <IconButton onClick={handleIncreaseItemsPerPage} color="primary">
            <AddIcon />
          </IconButton>
        </Box>
      </Box>

      <Pagination
        count={Math.ceil(items.length / currentItemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        sx={{ display: "flex", justifyContent: "center" }}
      />
    </div>
  );
};

export default PaginationComponent;
