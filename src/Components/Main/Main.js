import React from "react";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoutes from "../../routes/PrivateRoutes";
import PublicRoutes from "../../routes/PublicRoutes";
import useWindowSize from "../diary/diaryHook/UseDiary";
import UserBar from "../Header/UserBar/UserBar";
const Main = () => {
  const authToken = useSelector(
    (state) => state.authorization.tokens.accessToken
  );
  const size = useWindowSize();
  return (
    <>
      {size.width < 768 && <UserBar />}

      <main>
        <Suspense fallback={"Loading..."}>
          <Switch>
            {mainRoutes.map((item) =>
              item.private ? (
                <PrivateRoutes {...item} key={item.path} auth={authToken} />
              ) : (
                <PublicRoutes {...item} key={item.path} auth={authToken} />
              )
            )}
          </Switch>
        </Suspense>
      </main>
    </>
  );
};

export default Main;
