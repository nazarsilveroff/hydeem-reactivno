import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/auth/authActions";
import { authorizationSelector } from "../../../redux/auth/authSelectors";
import { userNameSelector } from "../../../redux/user/userSelectors";
import classNames from "classnames";
import useWindowSize from "../../diary/diaryHook/UseDiary";
import style from "./UserBar.module.css";

const UserBar = () => {
  const size = useWindowSize();
  const username = useSelector(userNameSelector);
  const authorization = useSelector(authorizationSelector);
  const dispatch = useDispatch();

  return authorization ? (
    <div
      className={classNames(
        size.width < 768 && style.userBox1,
        size.width > 768 && style.userBox2,
        size.width > 1280 && style.userBox3
      )}
    >
      <div className={style.userInfo}>
        <span className={style.name}>{username}</span>
      </div>
      <button
        className={style.logOut}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Выйти
      </button>
    </div>
  ) : null;
};

export default UserBar;
