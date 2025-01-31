import React, { useState } from "react";
import { CustomTextField } from "../../Common/TextField";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Local state for the search query

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query); // Update local state for search query
    onSearch(query); // Pass the search query to the parent via onSearch
  };

  return (
    <CustomTextField
      value={searchQuery}
      onChange={handleSearch}
      placeholder="Search movies..."
    />
  );
};

export default SearchBar;
