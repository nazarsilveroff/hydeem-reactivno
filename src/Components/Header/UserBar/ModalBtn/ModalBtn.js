import React from "react";
import useModal from "../../../Modal/ModalHook/useModal";
import style from "./ModalBtn.module.css";

const ModalBtn = () => {
  const { toggle } = useModal();
  return <button className={style.ModalBtn} onClick={toggle}></button>;
};

export default ModalBtn;
