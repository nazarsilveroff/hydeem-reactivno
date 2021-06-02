import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDayId, getEatenProducts } from "../../../redux/day/daySelectors";

import { deleteProductOperation } from "../../../redux/day/dayOperations";

import useModal from "../../Modal/ModalHook/useModal";
import useWindowSize from "../diaryHook/UseDiary";
import styles from "../diaryProductList/DiaryProductList.module.css";

const DiaryProductList = () => {
  let size = useWindowSize();
  const dispatch = useDispatch();
  const eatenProducts = useSelector(getEatenProducts);
  const id = useSelector(getDayId);

  const handleDelete = (e) => {
    dispatch(
      deleteProductOperation({
        dayId: id,
        eatenProductId: e.target.id,
      })
    );
  };

  const { toggle } = useModal();

  return (
    <>
      <ul className={styles.diaryProductList}>
        {eatenProducts?.map((item) => (
          <li key={item.id} className={styles.diaryProductListItem}>
            <p className={styles.diaryProductListName}>{item.title}</p>
            <p className={styles.diaryProductListWeight}>
              {Math.round(item.weight)} г
            </p>
            <p className={styles.diaryProductListCcal}>
              {Math.round(item.kcal)} ккал
            </p>
            <button
              id={item.id}
              className={styles.diaryProductListButton}
              onClick={handleDelete}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      {size.width < 768 ? (
        <button
          type="button"
          className={styles.diaryButtonRounded}
          onClick={toggle}
        >
          +
        </button>
      ) : null}
    </>
  );
};

export default DiaryProductList;
