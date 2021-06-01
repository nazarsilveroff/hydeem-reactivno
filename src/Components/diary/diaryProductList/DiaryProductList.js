import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocalDaySelector } from "../../../redux/day/daySelectors";
// import { deleteProductSuccess } from "../../../redux/product/productActions";
import { deleteProductOperation } from "../../../redux/product/productOperations";
// import { getInfoForDaySelector } from "../../../redux/day/daySelectors";
import { userInfoForDay } from "../../../redux/user/userSelectors";
import useModal from "../../Modal/ModalHook/useModal";
import useWindowSize from "../diaryHook/UseDiary";
import styles from "../diaryProductList/DiaryProductList.module.css";

const DiaryProductList = () => {
  let size = useWindowSize();
  const infoForDay = useSelector(userInfoForDay);
  const selectedDate = useSelector(getLocalDaySelector);
  const currentDate = infoForDay?.filter(day => day.date === selectedDate.date)
  const eatenProducts = currentDate[0]?.eatenProducts
  const currentDateId = test.filter(item => item._id)
  console.log(currentDateId)
  const dispatch = useDispatch();
  const {toggle} = useModal()
  const handleDelete = (e) => {
    // dispatch(deleteProductOperation({productId: dayId}))
  } 

  return (
    <>
      <ul className={styles.diaryProductList}>
      {eatenProducts?.map(item => 
        <li key={item.id} className={styles.diaryProductListItem}>
        <p className={styles.diaryProductListName}>{item.title}</p>
        <p className={styles.diaryProductListWeight}>{item.weight}</p>
        <p className={styles.diaryProductListCcal}>{item.kcal}</p>
        <button id={item.id} className={styles.diaryProductListButton} onClick={handleDelete}>X</button>
      </li>
        )}
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
