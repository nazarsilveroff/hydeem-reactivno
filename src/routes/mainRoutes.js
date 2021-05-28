import { lazy } from "react";

export const mainRoutes = [
  {
    name: "",
    path: "/",
    isPrivate: false,
    isRestricted: false,
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /*webpackChunkName:'HomePage'*/)
    ),
  },
  {
    name: "Калькулятор",
    path: "/calculator",
    isPrivate: true,
    isRestricted: false,
    exact: true,
    component: lazy(() =>
      import("../pages/Calculate" /*webpackChunkName:'Calculate'*/)
    ),
  },
  {
    name: "Дневник",
    path: "/diary",
    isPrivate: true,
    isRestricted: false,
    exact: true,
    component: lazy(() =>
      import("../pages/Diary" /*webpackChunkName:'Diary'*/)
    ),
  },
  {
    name: "Вход",
    path: "/login",
    isPrivate: false,
    isRestricted: true,
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:'Login'*/)
    ),
  },
  {
    name: "Регистрация",
    path: "/registration",
    isPrivate: false,
    isRestricted: true,
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:'Registration'*/)
    ),
  },
];
