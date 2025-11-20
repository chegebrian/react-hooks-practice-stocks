import React from "react";
import { useStock } from "../contexts/Stocks";

function SearchBar() {
  const {
    handleSelectedOption,
    selectedOption,
    selectedButton,
    handleSelectedButton,
  } = useStock();

  console.log(selectedButton);

  return (
    <div>
      <strong>Sort by:</strong>
      <label htmlFor="Alphabetically">Alphabetically</label>
      <input
        type="radio"
        value="Alphabetically"
        id="Alphabetically"
        name="sort"
        checked={selectedButton === "Alphabetically"}
        onChange={handleSelectedButton}
      />
      <label htmlFor="Price">Price</label>
      <input
        type="radio"
        value="Price"
        id="Price"
        name="sort"
        checked={selectedButton === "Price"}
        onChange={handleSelectedButton}
      />
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleSelectedOption} value={selectedOption}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
