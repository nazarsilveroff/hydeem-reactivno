import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const NavItems = ({ path, exact, name }) => {
  const location = useLocation();
  return (
    <>
      <li className="">
        <NavLink
          to={{
            pathname: path,
            state: { from: location.pathname },
          }}
          className=""
          activeClassName=""
          exact={exact}
        >
          {name}
        </NavLink>
      </li>
    </>
  );
};

export default NavItems;
