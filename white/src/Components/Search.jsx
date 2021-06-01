import React from "react";
const Search = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="Search"
      className="form-control"
      value={value}
      id="Search"
      placeholder="Search....."
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default Search;
