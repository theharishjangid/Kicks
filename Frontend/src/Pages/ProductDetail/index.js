import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { productId } = useParams();
  return (
    <React.Fragment>
      <h2>ProductDetail - {productId}</h2>
    </React.Fragment>
  );
};

export default ProductDetail;
