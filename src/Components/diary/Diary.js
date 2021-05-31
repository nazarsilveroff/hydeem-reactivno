import React from "react";
import AddProductModal from "./AddProductModal/AddProductModal";
import Calendar from "./calendar/Calendar";
import DiaryForm from "./diaryForm/DiaryForm";
import DiaryProductList from "./diaryProductList/DiaryProductList";
import useWindowSize from "./diaryHook/UseDiary";
import style from "./Diary.module.css";

const Diary = () => {
  let size = useWindowSize();

  return (
    <div className={style.container}>
      <Calendar />
      {size.width < 767 ? (
        <AddProductModal
          children={<DiaryForm />}
        />
      ) : (
        <DiaryForm />
      )}
      <DiaryProductList/>
    </div>
  );
};

export default Diary;
