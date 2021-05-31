import { Field, Form, Formik } from "formik";
import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authorizationSelector } from "../../redux/auth/authSelectors";
import { getAllProdSelector, getDailyRateSelector } from "../../redux/daily-rate/dailySelectors";
import styles from "./Modal.module.css";
import useModal from "./ModalHook/useModal";

const modalRoot = document.getElementById("modal-root");

const Modal = () => {
  const dailyRateCalorie = useSelector(getDailyRateSelector);
  const notAllowedProductsList = useSelector(getAllProdSelector);
  const authorization = useSelector(authorizationSelector);
  const { isOpen, toggle } = useModal();

  return (
    !authorization &&
    createPortal(
      isOpen ? (
        <div className={styles.modalOverlay}>
          <div className={styles.modalWindow}>
            <button className={styles.closeModalBtn} onClick={toggle} />
            <h2 className={styles.dailyCaloryIntakeTitle}>Ваша рекомендуемая суточная норма калорий составляет</h2>
            <div className={styles.dailyCaloryIntakeContainer}>
              <div className={styles.dailyCaloryIntakeResultContainer}>
                <span className={styles.dailyCaloryIntakeNumber}>{dailyRateCalorie} </span>
                <span className={styles.dailyCaloryIntakeKcal}>ккал</span>
              </div>
              <p className={styles.forbiddenProductsTtile}>Продукты, которые вам не рекомендуется употреблять</p>

              <Formik>
                <Form method="POST" action="#" className={styles.forbiddenProductsSearch}>
                  <Field className={styles.forbiddenProductsInput} />
                  <span className={styles.findForbiddenProductsIcon} />
                </Form>
              </Formik>

              <div className={styles.forbiddenProductsContainer}>
                <ul className={styles.forbiddenProductsList}>
                  <li className={styles.forbiddenProductsItems}>{notAllowedProductsList}</li>
                </ul>
              </div>
              <Link type="button" to="/login" className={styles.startGettingSlimButton} onClick={toggle}>
                Начать худеть
              </Link>
            </div>
          </div>
        </div>
      ) : null,
      modalRoot
    )
  );
};

export default Modal;
