import React from "react";
import "./style.css";

const SearchForm = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <label>
        <input
          type="search"
          placeholder="insert name of medication"
          value={searchTerm}
          onChange={onInputChange}
          required
        />
        <button type="submit" className="searchBtn">Search</button>
      </label>
      {error && (
        <div style={{ color: `red` }}>
          some error occurred, while fetching api
        </div>
      )}
    </form>
  );
};

export default SearchForm;