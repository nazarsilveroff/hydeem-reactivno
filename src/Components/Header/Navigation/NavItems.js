import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const NavItems = ({ path, exact, name, isAuth, isPrivate, isRestricted }) => {
  const location = useLocation();
  return (
    <>
      {!isPrivate && isRestricted && (
        <li className="link" activeClassName="active-link">
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
      )}

      {/* {isAuth && isPrivate && !isRestricted && (
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
      )}
      {isAuth && isPrivate && !isRestricted && (
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
      )} */}
    </>
  );
};

export default NavItems;
