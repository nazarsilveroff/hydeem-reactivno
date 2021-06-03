import React from "react";
import { LoaderWraper } from "./LoaderProductsStyled";
const LoaderProducts = () => {
  return (
    <LoaderWraper>
      <div className="loader" id="loader-4">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </LoaderWraper>
  );
};

export default LoaderProducts;
