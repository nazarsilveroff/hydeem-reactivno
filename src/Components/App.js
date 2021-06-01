import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocalDay } from "../redux/day/dayActions";
import { getSummaryForDayOperation } from "../redux/day/dayOperations";
import { getUserOperation } from "../redux/user/userOperations";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Modal from "./Modal/Modal";
import { getLocalDaySelector } from "../redux/day/daySelectors";

function App() {
  const user = useSelector((state) => state.user.userInfo.id);
  const token = useSelector((state) => state.authorization.tokens.accessToken);
  const selectedDay = useSelector(getLocalDaySelector);

  const dispatch = useDispatch();

  // const dateFormat = require("dateformat");
  // const now = new Date();
  // const date = dateFormat(now, "isoDate");

  useEffect(() => {
    !user &&
      token &&
      dispatch(getUserOperation()) &&
      // dispatch(getLocalDay(selectedDay)) &&
      dispatch(getSummaryForDayOperation());
  }, [selectedDay, user, token, dispatch]);

  return (
    <>
      <Header />
      <Main />
      <Modal />
    </>
  );
}

export default App;
