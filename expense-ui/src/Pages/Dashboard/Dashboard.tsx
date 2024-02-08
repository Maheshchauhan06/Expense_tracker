import React, { useState } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./Dashboard.css";
import DropDown from "../../Components/DropDown/DropDown";
import ExpenseCard from "../../Components/Card/ExpenseCard";

interface optionsObj {
  type: string;
  id: number;
}

const Dashboard = () => {
  const [Options, setOptions] = useState<optionsObj[] | undefined>([
    {
      type: "Needs",
      id: 1,
    },
    {
      type: "Wants",
      id: 2,
    },
    { type: "Expense", id: 3 },
  ]);

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="dashboard-container">
      <div className="add-expense-container">
        <label className="select-type-container">
          <DropDown
            value={selectedOption}
            label={"Expense Type"}
            options={Options}
            handleChange={handleChange}
          />
        </label>
        <SearchBar />
      </div>
      <div className="expense-card-container">
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </div>
    </div>
  );
};

export default Dashboard;
