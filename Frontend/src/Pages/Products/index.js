import React from "react";
import { useLocation } from 'react-router-dom';

const Products = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  const category = queryParams.get('category');
  const gender = queryParams.get('gender');
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <h2>Products {category} {gender}</h2>
    </React.Fragment>
  );
};

export default Products;
