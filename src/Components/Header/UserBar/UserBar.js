import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/auth/authActions";
import { usernameSelector } from "../../../redux/auth/authSelectors";
const UserBar = () => {
  const dispatch = useDispatch();
  const username = useSelector(usernameSelector);
  return (
    <div>
      <div>
        <p>{username}</p>
      </div>
      <button className="" type="button" onClick={() => dispatch(logOut())}>
        Выход
      </button>
    </div>
  );
};

export default UserBar;
