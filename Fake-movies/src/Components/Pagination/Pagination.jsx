import React, { useState, useEffect } from "react";
import { Pagination, Box  } from "@mui/material";

const PaginationComponent = ({ items, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItemsPerPage, setCurrentItemsPerPage] = useState(itemsPerPage);

  const indexOfLastItem = currentPage * currentItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - currentItemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);


  const handlePageChange = ( value) => {
    setCurrentPage(value); 
    onPageChange(currentItems); 
  };


  useEffect(() => {
    onPageChange(currentItems); 
  }, [currentPage, currentItemsPerPage, items]);

  return (
      <Pagination
        count={Math.ceil(items.length / currentItemsPerPage)}
        page={currentPage}
        onChange={(e, value) => handlePageChange(value)}
        color="secondary"
        sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      />
  );
};

export default PaginationComponent;
