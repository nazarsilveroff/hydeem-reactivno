import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useModal from "../Components/Modal/ModalHook/useModal";
import { authorizationSelector } from "../redux/auth/authSelectors";

import cssStyles from "classnames";

import { getDailyRateOperation } from "../redux/daily-rate/dailyOperations";
import styles from "./Calculate.module.css";
import Loader from "../Components/loader/Loader";
const initialState = {
  height: "",
  age: "",
  weight: "",
  desiredWeight: "",
  bloodType: " ",
};
const Calculate = () => {
  const loading = useSelector((state) => state.loading);
  const authorization = useSelector(authorizationSelector);
  const { toggle } = useModal();
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(getDailyRateOperation(state));
    !authorization && toggle();
  };

  return (
    <>
      {loading && <Loader />}
      <div
        className={cssStyles(
          authorization ? styles.container : styles.container__active
        )}
      >
        <div className={styles.form__box}>
          <form className={styles.form} onSubmit={handleFormSubmit}>
            <h2 className={styles.title}>
              {authorization
                ? "Узнай свою суточную норму калорий"
                : "Просчитай свою суточную норму калорий прямо сейчас"}
            </h2>
            <div className={styles.inputWrapper}>
              <div className={styles.inputBlock}>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    placeholder=" "
                    type="number"
                    name="height"
                    value={state.height}
                    onChange={handleinputChange}
                    min="100"
                    max="260"
                    required
                  />
                  <p className={styles.labelValue}>Рост*</p>
                </label>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    placeholder=" "
                    type="number"
                    name="age"
                    onChange={handleinputChange}
                    value={state.age}
                    min="12"
                    max="100"
                    required
                  />
                  <p className={styles.labelValue}>Возраст*</p>
                </label>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    placeholder=" "
                    type="number"
                    name="weight"
                    onChange={handleinputChange}
                    value={state.weight}
                    min="40"
                    max="150"
                    required
                  />
                  <p className={styles.labelValue}>Текущий вес*</p>
                </label>
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    placeholder=" "
                    type="number"
                    name="desiredWeight"
                    onChange={handleinputChange}
                    value={state.desiredWeight}
                    min="40"
                    max="150"
                    required
                  />
                  <p className={styles.labelValue}>Желаемый вес*</p>
                </label>
                <div className={styles.radioGroupContainer}>
                  <p className={styles.radioTitle}>Группа крови *</p>
                  <div className={styles.radioWrapper}>
                    <input
                      type="radio"
                      id="first"
                      name="bloodType"
                      value="1"
                      onChange={handleinputChange}
                      checked={state.bloodType === "1"}
                      required
                    />
                    <label htmlFor="first" className={styles.radioLabel}>
                      1
                    </label>
                    <input
                      type="radio"
                      id="second"
                      name="bloodType"
                      value="2"
                      onChange={handleinputChange}
                      checked={state.bloodType === "2"}
                      required
                    />
                    <label htmlFor="second" className={styles.radioLabel}>
                      2
                    </label>
                    <input
                      type="radio"
                      id="third"
                      name="bloodType"
                      value="3"
                      onChange={handleinputChange}
                      checked={state.bloodType === "3"}
                      required
                    />
                    <label htmlFor="third" className={styles.radioLabel}>
                      3
                    </label>
                    <input
                      type="radio"
                      id="fourth"
                      name="bloodType"
                      value="4"
                      onChange={handleinputChange}
                      checked={state.bloodType === "4"}
                      required
                    />
                    <label htmlFor="fourth" className={styles.radioLabel}>
                      4
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.button} type="submit">
              Похудеть
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Calculate;
