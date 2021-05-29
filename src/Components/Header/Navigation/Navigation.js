import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoutes";
import UserBar from "../UserBar/UserBar";
import style from "./Nav.module.css";
import { useSelector } from "react-redux";
import BurgerModal from "./BurgerModal/BurgerModal";
import NavItems from "./NavItems/NavItems";
import useWindowSize from "../../diary/diaryHook/UseDiary";

const Navigation = () => {
  const [toglBurger, setToglBurger] = useState(false);
  const hendleToglBurger = () => {
    setToglBurger(!toglBurger);
  };
  const authToken = useSelector(
    (state) => state.authorization.tokens.accessToken
  );
  const size = useWindowSize();
  return (
    <>
      {authToken && (
        <div className={style.borderBotom}>
          <nav className={style.navContainer}>
            <div className={style.linkWrapper}>
              <NavLink className={style.imageLink} to="/"></NavLink>
              {size.width > 1280 && (
                <ul className={style.navList}>
                  {mainRoutes.map((item) => (
                    <NavItems
                      item={item}
                      key={item.path}
                      authToken={authToken}
                    />
                  ))}
                </ul>
              )}
              {size.width <= 1280 && (
                <>
                  {size.width > 768 && <UserBar />}

                  <BurgerModal
                    hendleToglBurger={hendleToglBurger}
                    toglBurger={toglBurger}
                    authToken={authToken}
                  />
                </>
              )}
            </div>
          </nav>
        </div>
      )}
      {!authToken && (
        <nav className={style.navContainer}>
          <div className={style.linkWrapper}>
            <NavLink className={style.imageLink} to="/"></NavLink>
            <ul className={style.navList}>
              {mainRoutes.map((item) => (
                <NavItems item={item} key={item.path} authToken={authToken} />
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navigation;
