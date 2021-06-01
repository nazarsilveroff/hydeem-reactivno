import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoForDaySelector } from "../../../redux/day/daySelectors";

import { deleteProductOperation } from "../../../redux/product/productOperations";

import useModal from "../../Modal/ModalHook/useModal";
import useWindowSize from "../diaryHook/UseDiary";
import styles from "../diaryProductList/DiaryProductList.module.css";

const DiaryProductList = () => {
  let size = useWindowSize();
  const dispatch = useDispatch();
  const infoForDay = useSelector(getInfoForDaySelector);
  const currentDateId = infoForDay.id;
  // const [eatenProducts, setEatenProducts] = useState([]);
  const products = infoForDay?.eatenProducts;

  // useEffect(() => {
  //   setEatenProducts(products);
  // }, [products]);

  const handleDelete = (e) => {
    dispatch(
      deleteProductOperation({
        dayId: currentDateId,
        eatenProductId: e.target.id,
      })
    );
    // setEatenProducts((prevProducts) =>
    //   prevProducts.filter((product) => product.id === e.target.id)
    // );
  };

  const { toggle } = useModal();

  return (
    <>
      <ul className={styles.diaryProductList}>
        {products?.map((item) => (
          <li key={item.id} className={styles.diaryProductListItem}>
            <p className={styles.diaryProductListName}>{item.title}</p>
            <p className={styles.diaryProductListWeight}>{item.weight}</p>
            <p className={styles.diaryProductListCcal}>{item.kcal}</p>
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
