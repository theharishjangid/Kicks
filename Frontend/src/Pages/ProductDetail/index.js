import React from "react";
import { useParams } from "react-router-dom";
import Details from "./Details/Details";
import Suggestions from "./Suggestions/Suggestions";

const ProductDetail = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { productId } = useParams();
  return (
    <div className="app__page__container">
      <Details productId={parseInt(productId)}/>
      <Suggestions />
    </div>
  );
};

export default ProductDetail;
