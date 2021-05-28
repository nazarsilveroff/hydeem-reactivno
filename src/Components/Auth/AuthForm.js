import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import {
  loginOperations,
  registerOperations,
} from "../../redux/auth/authOperations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import schema from "./Validation/validator";
import { AuthFormContainer } from "./AuthFormStyled";
const registrationValues = {
  email: "ddd@gmail.com",
  password: "123456",
  username: "ddd",
};
const loginValues = {
  email: "ddd@gmail.com",
  password: "123456",
};
const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <AuthFormContainer>
      <div className="navContainer">
        <h1 className="authTitle">
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
          <Form className="form">
            {location.pathname === "/registration" ? (
              <>
                <label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Имя *"
                    className="input"
                  />
                  <ErrorMessage name="username" component="div" />
                </label>
                <label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Електронна почта *"
                    className="input"
                  />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Пароль *"
                    className="input"
                  />
                  <ErrorMessage name="password" component="div" />
                </label>
                <button type="submit" className="button">
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
                    className="input"
                  />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Пароль *"
                    className="input"
                  />
                  <ErrorMessage name="password" component="div" />
                </label>
                <button type="submit" className="button">
                  {location.pathname === "/registration"
                    ? "Регистрация"
                    : "Вход"}
                </button>
              </>
            )}
          </Form>
        </Formik>
      </div>
    </AuthFormContainer>
  );
};

export default AuthForm;
