import React from "react";
import "./New.scss";
import { PrimaryButton, ShoeCard } from "../../../Components"
import ShoeImg from "../../../Assets/shoe.png"

const New = () => {
  return (
    <div className="app__page__container app__flex home__new__container">
      <div className="home__new__container-heading">
        <h2>Don’t miss out new drops</h2>
        <PrimaryButton name="view all" to="/products" />
      </div>
      <div className="home__new__container-body">
        <ShoeCard
          productId={2}
          tag="New"
          image={ShoeImg}
          title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          price="$125"
        />
        <ShoeCard
          productId={3}
          tag="New"
          image={ShoeImg}
          title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          price="$125"
        />
        <ShoeCard
          productId={4}
          tag="New"
          image={ShoeImg}
          title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          price="$125"
        />
        <ShoeCard
          productId={5}
          tag="New"
          image={ShoeImg}
          title="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
          price="$125"
        />
      </div>
    </div>
  );
};

export default New;
