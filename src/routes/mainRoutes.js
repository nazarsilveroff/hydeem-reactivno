import { lazy } from "react";
// import AuthPage from "../pages/AuthPage";
// import Calculate from "../pages/Calculate";
// import Diary from "../pages/Diary";
// import HomePage from "../pages/HomePage";

export const mainRoutes = [
  {
    name: "",
    path: "/",
    private: false,
    restricted: false,
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /*webpackChunkName:'HomePage'*/)
    ),
  },
  {
    name: "",
    path: "/calculator",
    private: true,
    restricted: false,
    exact: true,
    component: lazy(() =>
      import("../pages/Calculate" /*webpackChunkName:'Calculate'*/)
    ),
  },
  {
    name: "",
    path: "/diary",
    private: true,
    restricted: false,
    exact: true,
    component: lazy(() =>
      import("../pages/Diary" /*webpackChunkName:'Diary'*/)
    ),
  },
  {
    name: "Вход",
    path: "/login",
    private: false,
    restricted: false,
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:'Login'*/)
    ),
  },
  {
    name: "Регистрация",
    path: "/registration",
    private: false,
    restricted: false,
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:'Registration'*/)
    ),
  },
];
