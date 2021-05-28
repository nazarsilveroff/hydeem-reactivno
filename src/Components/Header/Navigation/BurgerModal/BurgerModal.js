import React from "react";
import { mainRoutes } from "../../../../routes/mainRoutes";
import NavItems from "../NavItems";
const BurgerModal = ({ authToken }) => {
  return (
    <ul className="">
      {mainRoutes.map((item) => (
        <NavItems item={item} key={item.path} authToken={authToken} />
      ))}
    </ul>
  );
};

export default BurgerModal;
