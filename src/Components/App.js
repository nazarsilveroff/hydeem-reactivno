import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSummaryForDayOperation } from "../redux/day/dayOperations";
import { getUserOperation } from "../redux/user/userOperations";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  const user = useSelector((state) => state.user.userInfo.id);
  const token = useSelector((state) => state.authorization.tokens.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    !user &&
      token &&
      dispatch(getUserOperation()) &&
      dispatch(getSummaryForDayOperation());
  }, [user, token, dispatch]);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
