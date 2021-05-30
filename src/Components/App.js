import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOperation } from "../redux/user/userOperations";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Modal from "./Modal/Modal";

function App() {
  const user = useSelector(state => state.user.userInfo.id);
  const token = useSelector(state => state.authorization.tokens.accessToken);
  const dispatch = useDispatch();
  useEffect(
    () => {
      !user && token && dispatch(getUserOperation());
    },
    [user, token, dispatch]
  );
  return (
    <>
      <Header />
      <Main />
      <Modal />
    </>
  );
}

export default App;
