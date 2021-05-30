import React, { useState } from "react";
import AddProductModal from "./AddProductModal/AddProductModal";
import Calendar from "./calendar/Calendar";
import DiaryForm from "./diaryForm/DiaryForm";
import DiaryProductList from "./diaryProductList/DiaryProductList";
import useWindowSize from "./diaryHook/UseDiary";
import style from "./Diary.module.css";

const Diary = (state) => {
  console.log(state)
  let size = useWindowSize();
  const [toggleDiaryModal, setToggleDiaryModal] = useState(false);
  const handleToggler = (e) => {
    setToggleDiaryModal(!toggleDiaryModal);
  };
  // console.log(toggleDiaryModal)
  return (
    <div className={style.container}>
      <Calendar />
      {size.width < 767 ? (
        <AddProductModal
          toggleDiaryModal={toggleDiaryModal}
          children={<DiaryForm />}
        />
      ) : (
        <DiaryForm />
      )}
      <DiaryProductList handleToggler={handleToggler} />
    </div>
  );
};

export default Diary;
