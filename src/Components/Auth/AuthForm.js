import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import {
  loginOperations,
  registerOperations,
} from "../../redux/auth/authOperations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import schema from "./Validation/validator";
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
  console.log("location", location.pathname);
  return (
    <div>
      <div>
        <h1>
          {location.pathname === "/registration" ? "Registeration" : "Login"}
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
          <Form>
            {location.pathname === "/registration" ? (
              <>
                <label>
                  Name:
                  <Field
                    type="text"
                    name="username"
                    placeholder="Sara"
                    className=""
                  />
                  <ErrorMessage name="username" component="div" />
                </label>
                <label>
                  Email:
                  <Field
                    type="email"
                    name="email"
                    placeholder="sara@gmail.com"
                    className=""
                  />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label>
                  Password:
                  <Field
                    type="password"
                    name="password"
                    placeholder="**********"
                    className=""
                  />
                  <ErrorMessage name="password" component="div" />
                </label>
                <button type="submit" className="">
                  {location.pathname === "/registration"
                    ? "Sign up"
                    : "Sign in"}
                </button>
              </>
            ) : (
              <>
                <label>
                  Email:
                  <Field
                    type="email"
                    name="email"
                    placeholder="sara@gmail.com"
                    className=""
                  />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label>
                  Password:
                  <Field
                    type="password"
                    name="password"
                    placeholder="**********"
                    className=""
                  />
                  <ErrorMessage name="password" component="div" />
                </label>
                <button type="submit" className="">
                  {location.pathname === "/registration"
                    ? "Sign up"
                    : "Sign in"}
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
