import React from "react";
import { RotateSpinner } from "react-spinners-kit";
import style from "./Loader.module.css";

export default class App extends React.Component {
  render() {
    return (
      <div className={style.loaderWrapper}>
        <RotateSpinner size={100} color="#fc842d" timeout={3000} />
      </div>
    );
  }
}
