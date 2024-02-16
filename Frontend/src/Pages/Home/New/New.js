import React from "react";
import "./New.scss";
import { PrimaryButton, ShoeCard } from "../../../Components";
import { ShoesData } from "../../../Data/Shoes";

const New = () => {
  return (
    <div className="app__page__container app__flex home__new__container">
      <div className="home__new__container-heading">
        <h2>Don’t miss out new drops</h2>
        <PrimaryButton name="view all" to="/products" />
      </div>
      <div className="home__new__container-body">
        {ShoesData.filter((item) => item.tag === "New")
          .slice(0, 4)
          .map((shoe) => (
            <ShoeCard
              productId={shoe.productId}
              tag={shoe.tag}
              image={shoe.image1}
              name={shoe.name}
              price={shoe.price}
            />
          ))}
      </div>
    </div>
  );
};

export default New;
