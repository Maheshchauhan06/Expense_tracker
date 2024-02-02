import React from "react";
import "./SearchBar.css";
import Buttons from "../Buttons/PrimaryButton/PrimaryButton";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Add expense" />
      <Buttons style={{ width: "6rem" }} label={"Add"} type={"submit"} />
    </div>
  );
};

export default SearchBar;
