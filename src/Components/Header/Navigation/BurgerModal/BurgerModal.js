import React from "react";
import { mainRoutes } from "../../../../routes/mainRoutes";
import style from "./Burger.module.css";
import cls from "classnames";

import { NavLink, useLocation } from "react-router-dom";
const BurgerModal = ({ toglBurger, hendleToglBurger, authToken }) => {
  const location = useLocation();

  return (
    <>
      <button
        className={cls(toglBurger ? style.burgerCloseBtn : style.burgerOpenBtn)}
        type="button"
        onClick={hendleToglBurger}
      ></button>

      <div
        className={cls(
          toglBurger
            ? style.burgerModalWrapperOpen
            : style.burgerModalWrapperClose
        )}
      >
        <ul className={style.burgerList}>
          {mainRoutes.map((item) => (
            <li key={item.path} className={style.navItem}>
              {authToken && !item.restricted && (
                <NavLink
                  onClick={hendleToglBurger}
                  to={{
                    pathname: item.path,
                    state: { from: location.pathname },
                  }}
                  className={style.navItemLink}
                  activeClassName={style.activ}
                  exact={item.exact}
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BurgerModal;
