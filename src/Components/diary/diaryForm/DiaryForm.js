import React, { useState } from "react";
import styles from "./DiaryForm.module.css";
import stylesBtn from "../diaryProductList/DiaryProductList.module.css";
import useWindowSize from "../diaryHook/UseDiary";
import { useDispatch, useSelector } from "react-redux";
import { getSearchProductOperation } from "../../../redux/product/productOperations";
import { debounce } from "debounce";
import { getSearchProductsSelector } from "../../../redux/product/productSelectors";

const DiaryForm = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const products = useSelector(getSearchProductsSelector);

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };

  const onHandleChange = (e) => {
    if (e.target.value && e.target.name === "search") {
      setValue(e.target.value);
      e.target.value.length > 2 && dispatch(getSearchProductOperation(value));
    }

  };

  const handleProduct = (e) => {
    console.log(`${e.target.textContent}:`, e.target.id)
  }

  let size = useWindowSize();
  return (
    <>
      <form onSubmit={onHandleSubmit} className={styles.diaryForm}>
        <input
          name="search"
          onChange={debounce(onHandleChange, 500)}
          className={styles.diaryInput}
          type="text"
          placeholder="Введите название продукта"
          list="products"
          autoComplete="off"
        />
        <ul className={styles.productResultList} id="products" >
          {products.map((item) => (
            <li className={styles.productResultListItem} id={item._id} key={item._id} onClick={handleProduct}>{item.title.ru}</li>
          ))}
        </ul>
        <input
          name="weight"
          className={styles.diaryInput}
          type="text"
          placeholder="Граммы"
        />
        <button
          type="submit"
          className={
            size.width < 768
              ? styles.diaryButtonModal
              : stylesBtn.diaryButtonRounded
          }
        >
          {size.width < 768 ? "Добавить" : "+"}
        </button>
      </form>
    </>
  );
};

export default DiaryForm;
