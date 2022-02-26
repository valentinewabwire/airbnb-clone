import { Button } from "@mui/material";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays· 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://cdn.pixabay.com/photo/2018/09/04/02/13/pool-bar-3652849_960_720.jpg"
        location="Nairobi"
        title="Entire condominium condo hosted by Claudio"
        description="2 guests . 1 bedroom . 1 bed . 1 bath"
        star={4.73}
        price="$ 40 / night"
        total="$ 100 total"
      />
      <SearchResult
        img="https://cdn.pixabay.com/photo/2020/04/17/12/28/pool-5055009_960_720.jpg"
        location="Mombasa"
        title="Entire condominium condo hosted by Claudio"
        description="2 guests . 1 bedroom . 1 bed . 1 bath"
        star={4.01}
        price="$ 40 / night"
        total="$ 100 total"
      />
    </div>
  );
}

export default SearchPage;
