import React from "react";
import "./New.scss";
import { PrimaryButton, ShoeCard } from "../../../Components"

const New = () => {
  return (
    <div className="app__page__container app__flex home__new__container">
      <div className="home__new__container-heading">
        <h2>Don’t miss out new drops</h2>
        <PrimaryButton name="Shop New Drops" />
      </div>
      <div className="home__new__container-body">
        <ShoeCard
          tag="New"
          image=""
          title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          price="$125"
        />
        <ShoeCard
          tag="New"
          image=""
          title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          price="$125"
        />
        <ShoeCard
          tag="New"
          image=""
          title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          price="$125"
        />
        <ShoeCard
          tag="New"
          image=""
          title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          price="$125"
        />
      </div>
    </div>
  );
};

export default New;
