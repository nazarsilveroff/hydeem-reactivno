import React from "react";
import { useSelector } from "react-redux";
import AuthForm from "../Components/Auth/AuthForm";
import Loader from "../Components/loader/Loader";
import { getLoader } from "../redux/loading/loaderSelectors";

const AuthPage = () => {
  const loading = useSelector(getLoader);

  return (
    <>
      {!loading ? (
        <>
          <AuthForm />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default AuthPage;
