import React, { useState } from "react";
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
  const [search, setSearch] = useState("");

  const onHandleChange = event => {
    setSearch(event.target.value);
  };

  const filteredNotAllowedProducts = () => {
    return notAllowedProductsList?.slice(0, 20).filter(filteredProduct => filteredProduct.toLowerCase().includes(search));
  };

  return (
    !authorization &&
    createPortal(
      isOpen ? (
        <div className={styles.modalOverlay}>
          <div className={styles.modalWindow}>
            <button className={styles.closeModalBtn} onClick={toggle} />
            <h2 className={styles.dailyCalorieIntakeTitle}>Ваша рекомендуемая суточная норма калорий составляет</h2>
            <div className={styles.dailyCalorieIntakeContainer}>
              <div className={styles.dailyCalorieIntakeResultContainer}>
                <span className={styles.dailyCalorieIntakeNumber}>{dailyRateCalorie} </span>
                <span className={styles.dailyCalorieIntakeKcal}>ккал</span>
              </div>
              <p className={styles.forbiddenProductsTitle}>Продукты, которые вам не рекомендуется употреблять</p>

              <div className={styles.forbiddenProductsSearch}>
                <input className={styles.forbiddenProductsInput} value={search} onChange={onHandleChange} />
                <span className={styles.findForbiddenProductsIcon} />
              </div>

              <div className={styles.forbiddenProductsContainer}>
                {filteredNotAllowedProducts()?.length ? (
                  <ol className={styles.forbiddenProductsList}>
                    {filteredNotAllowedProducts()?.map(product => (
                      <li className={styles.forbiddenProductsItems} key={product}>
                        {product}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <span className={styles.noResultMessage}>Нет результата на данный поиск</span>
                )}
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
