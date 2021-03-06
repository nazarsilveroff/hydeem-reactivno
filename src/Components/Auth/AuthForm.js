import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import {
  loginOperations,
  registerOperations,
} from "../../redux/auth/authOperations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import schema from "./Validation/validator";
import style from "./AuthForm.module.css";

const registrationValues = {
  email: "",
  password: "",
  username: "",
};
const loginValues = {
  email: "",
  password: "",
};
const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <div className={style.AuthFormContainer}></div>
      <div className={style.navContainer}>
        <h1 className={style.authTitle}>
          {location.pathname === "/registration" ? "регистрация" : "вход"}
        </h1>
        <Formik
          initialValues={
            location.pathname === "/registration"
              ? registrationValues
              : loginValues
          }
          validationSchema={schema}
          onSubmit={(values) => {
            location.pathname === "/registration"
              ? dispatch(registerOperations(values))
              : dispatch(loginOperations(values));
          }}
        >
          <Form className={style.form}>
            {location.pathname === "/registration" ? (
              <>
                <label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Имя *"
                    className={style.input}
                  />
                  <ErrorMessage name="username" component="div" />
                </label>
                <label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Електронна почта *"
                    className={style.input}
                  />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Пароль *"
                    className={style.input}
                  />
                  <ErrorMessage name="password" component="div" />
                </label>
                <button type="submit" className={style.buttons}>
                  {location.pathname === "/registration"
                    ? "Регистрация"
                    : "Вход"}
                </button>
              </>
            ) : (
              <>
                <label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Електронна почта *"
                    className={style.input}
                  />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Пароль *"
                    className={style.input}
                  />
                  <ErrorMessage name="password" component="div" />
                </label>
                <button type="submit" className={style.buttons}>
                  {location.pathname === "/registration"
                    ? "Регистрация"
                    : "Вход"}
                </button>
              </>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AuthForm;
