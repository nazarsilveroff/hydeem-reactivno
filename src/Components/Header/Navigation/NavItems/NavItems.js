import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./NavItems.module.css";

const NavItems = ({ item, authToken, toglBurger }) => {
  const location = useLocation();
  return (
    <>
      {!item.private && !item.restricted && (
        <li className={style.navItemDefault}>
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className={style.navItemLinkDefault}
            activeClassName={style.activDefault}
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
      {authToken && item.private && !item.restricted && (
        <li className={style.navItemDefault}>
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className={style.navItemLinkDefault}
            activeClassName={style.activDefault}
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
      {!authToken && !item.private && item.restricted && (
        <li className={style.navItemDefault}>
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className={style.navItemLinkDefault}
            activeClassName={style.activDefault}
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavItems;
