import React, { useEffect, useState } from "react";
import "./Card.css";
import { Utils } from "../../Utils/Utils";

const ExpenseCard = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    setCurrentDateTime(Utils.getCurrentTimeAndDate());
  }, []);

  return (
    <div className="card-container">
      <div>
        <h6>Type</h6>
        <h5>
          Rent paid 5000 Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Tempore magni temporibus animi totam eius mollitia non tenetur
          sit, vel sapiente dolorum voluptatem blanditiis possimus impedit
          nostrum officia doloribus ut nemo!
        </h5>
      </div>
      <p>{currentDateTime}</p>
    </div>
  );
};

export default ExpenseCard;
