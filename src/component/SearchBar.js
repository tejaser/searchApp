import React from "react";
const getInput = e => e.target.value;
const SearchBar = ({ filterText, onUserInput }) => (
  <input
    type="search"
    placeholder="Search"
    value={filterText}
    onChange={e => onUserInput(getInput(e))}
    style={{ margin: 20 }}
  />
);

export default SearchBar;
