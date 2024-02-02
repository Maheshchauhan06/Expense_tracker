import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./Dashboard.css";
import DropDown from "../../Components/DropDown/DropDown";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="add-expense-container">
        <label className="select-type-container">
          <DropDown />
        </label>
        <SearchBar />
      </div>
    </div>
  );
};

export default Dashboard;
