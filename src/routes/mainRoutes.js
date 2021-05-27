import { lazy } from "react";

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
    name: "Калькулятор",
    path: "/calculator",
    private: true,
    restricted: false,
    exact: true,
    component: lazy(() =>
      import("../pages/Calculate" /*webpackChunkName:'Calculate'*/)
    ),
  },
  {
    name: "Дневник",
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
    restricted: true,
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:'Login'*/)
    ),
  },
  {
    name: "Регистрация",
    path: "/registration",
    private: false,
    restricted: true,
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:'Registration'*/)
    ),
  },
];
