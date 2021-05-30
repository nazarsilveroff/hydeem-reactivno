import React from "react";
import useWindowSize from "../diaryHook/UseDiary";
import styles from "../diaryProductList/DiaryProductList.module.css";

const DiaryProductList = ({ handleToggler }) => {
  let size = useWindowSize();
  return (
    <>
      <ul className={styles.diaryProductList}>
        <li className={styles.diaryProductListItem}>
          <p className={styles.diaryProductListName}>name</p>
          <p className={styles.diaryProductListWeight}>weight</p>
          <p className={styles.diaryProductListCcal}>ccal</p>
          <button className={styles.diaryProductListButton}>X</button>
        </li>
      </ul>
      {size.width < 768 ? (
        <button
          type="button"
          className={styles.diaryButtonRounded}
          onClick={handleToggler}
        >
          +
        </button>
      ) : null}
    </>
  );
};

export default DiaryProductList;
