import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";

const PaginationComponent = ({ items, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (value) => {
    setCurrentPage(value);
    onPageChange(currentItems);
  };

  useEffect(() => {
    onPageChange(currentItems);
  }, [currentPage, items]); 

  return (
    <Pagination
      count={Math.ceil(items.length / itemsPerPage)}
      page={currentPage}
      onChange={(e, value) => handlePageChange(value)}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "2rem",
        "& .MuiPaginationItem-root": {
          color: "white !important",
        },
        "& .Mui-selected": {
          backgroundColor: "#1976d2 !important",
          color: "white !important",
          "&:hover": {
            backgroundColor: "#1565c0 !important",
          },
        },
      }}
    />
  );
};

export default PaginationComponent;
