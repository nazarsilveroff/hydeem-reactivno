import * as yup from "yup";

let schema = yup.object().shape({
  email: yup.string().email().required("Почта обязательное поле"),
  username: yup.string(),
  password: yup
    .string()
    .required("Введите корректный пароль")
    .min(6, "Минимум 6 символов")
    .max(12, "Максимум 12 символов"),
  // .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/, "passwordMatches"),

  // .matches(/^(?=.*[0-9a-zA-Z!@#$%^&*]{6,})$/, "0-9a-zA-Z!@#$%^&*"),
});
export default schema;
