import React from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoutes";
import UserBar from "../UserBar/UserBar";
import NavItems from "./NavItems";
const Navigation = () => {
  return (
    <>
      <nav>
        <div>
          <NavLink to="/">
            <img src="" alt="ху**м вместе" />
            <span>span</span>
          </NavLink>
          <ul>
            {mainRoutes.map((item) => (
              <NavItems {...item} key={item.path} />
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
