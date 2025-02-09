import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => (
  <TextField
    size="small"
    placeholder="Search by Name"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      ),
    }}
  />
);

export default SearchBar;
