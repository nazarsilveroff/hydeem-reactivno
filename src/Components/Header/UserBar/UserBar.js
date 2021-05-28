import React from "react";
import { useSelector } from "react-redux";
import { usernameSelector } from "../../../redux/user/userSelectors";
const UserBar = () => {
  const username = useSelector(usernameSelector);
  return (
    <div>
      <div>
        <p>{username}</p>
      </div>
      {/* <button
        className=""
        type="button"
        // onClick={signOut}
      >
        Log Out
      </button> */}
    </div>
  );
};

export default UserBar;
