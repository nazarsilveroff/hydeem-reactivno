import React from 'react';
import styles from './DiaryForm.module.css';
import stylesBtn from '../diaryProductList/DiaryProductList.module.css'
import useWindowSize from '../../diaryHook/UseDiary';




const DiaryForm = () => {
let size = useWindowSize();
  return  (
      <>
        <form className={styles.diaryForm}>
            <input className={styles.diaryInput} type="text" placeholder="Введите название продукта"/>
                <datalist>
                    <option value="яйцо"></option>
                </datalist>
            <input className={styles.diaryInput} type="text" placeholder="Граммы"/>
            <button className={size.width < 768 ? styles.diaryButtonModal : stylesBtn.diaryButtonRounded}>{size.width < 768 ? "Добавить" : "+"}</button>
        </form>
        </>
  );
}

export default DiaryForm;