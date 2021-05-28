import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoutes";
import UserBar from "../UserBar/UserBar";
import NavItems from "./NavItems";
import style from "./Nav.module.css";
import { useSelector } from "react-redux";
import BurgerModal from "./BurgerModal/BurgerModal";
const Navigation = () => {
  const [toglBurger, setToglBurger] = useState(false);
  const hendleToglBurger = () => {
    setToglBurger(!toglBurger);
  };
  const authToken = useSelector(
    (state) => state.authorization.tokens.accessToken
  );
  return (
    <>
      <nav className={style.navContainer}>
        <div className={style.linkWrapper}>
          <NavLink className={style.imageLink} to="/"></NavLink>
          <ul className={style.navList}>
            {mainRoutes.map((item) => (
              <NavItems item={item} key={item.path} authToken={authToken} />
            ))}
          </ul>
        </div>
        <div>
          <UserBar />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
