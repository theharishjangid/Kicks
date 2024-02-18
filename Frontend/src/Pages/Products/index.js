import React from "react";
import { useLocation } from "react-router-dom";
import Banner from "./Banner/Banner";
import Listing from "./Listing/Listing";

const Products = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  const category = queryParams.get("category");
  const gender = queryParams.get("gender");
  const tag = queryParams.get("tag");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app__page__container">
      <Banner />
      <Listing category={category} gender={gender} tag={tag} />
    </div>
  );
};

export default Products;
