import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../../redux/auth/authActions";
import { getIsAuthSelector } from "../../../redux/auth/authSelectors";
import { mainRoutes } from "../../../routes/mainRoutes";
import UserBar from "../UserBar/UserBar";
import { NavigationContainer } from "./NavigationStyled";
import NavItems from "./NavItems";
import logoMobile from "../../../svg/logo-mobile.svg";
const Navigation = () => {
  const isAuth = useSelector(getIsAuthSelector);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut);
  };
  return (
    <>
      <NavigationContainer>
        <nav className="nav">
          <NavLink to="/">
            <img src={logoMobile} alt="logo" />

            {/* <span>Slim</span>
            <span>Mom</span> */}
          </NavLink>
          <ul className="list">
            {mainRoutes.map((item) => (
              <NavItems {...item} key={item.path} isAuth={isAuth} />
            ))}
          </ul>
        </nav>

        <div className="userInfo">
          {isAuth && (
            <li className="link">
              <UserBar />
              <button type="button" onClick={logout} className="">
                Выход
              </button>
            </li>
          )}
        </div>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
