import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import styles from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return createPortal(
    isOpen ? (
      <div className={styles.modalOverlay}>
        <div className={styles.modalWindow}>
          <button className={styles.closeModalBtn} />
          <h2 className={styles.dailyCaloryIntakeTitle}>Ваша рекомендуемая суточная норма калорий составляет</h2>
          <div className={styles.dailyCaloryIntakeContainer}>
            <div className={styles.dailyCaloryIntakeResultContainer}>
              <span className={styles.dailyCaloryIntakeNumber}>2800 </span>
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
                <li className={styles.forbiddenProductsItems}>1. Мучные продукты</li>
              </ul>
            </div>
            <Link type="button" className={styles.startGettingSlimButton}>
              Начать худеть
            </Link>
          </div>
        </div>
      </div>
    ) : null,
    modalRoot
  );
};

export default Modal;
