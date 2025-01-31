import React, { useState } from "react";
import { CustomTextField } from "../../Common/TextField";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return <CustomTextField value={query} onChange={handleSearch} placeholder="Search movies..." />;
};

export default SearchBar;
