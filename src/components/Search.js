import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import "./Search.css";
import { useState } from "react";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange ={
      startDate: startDate,
      endDate: endDate,
      key: "selection",
  }
  return <div className="search"></div>;
}

export default Search;
