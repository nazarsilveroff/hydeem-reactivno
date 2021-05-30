import React from "react";
import { useSelector } from "react-redux";
import {
  getInfoForDaySelector,
  getLocalDaySelector,
} from "../../redux/day/daySelectors";
import style from "./Summary.module.css";

const Summary = () => {
  const { date } = useSelector(getLocalDaySelector);
  const infoForDay = useSelector(getInfoForDaySelector);

  const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } = infoForDay;
  return (
    <>
      <div className={style.container}>
        <div className={style.summary}>
          <h2 className={style.title}>Сводка за {date}</h2>
          <div className={style.statistics}>
            <ul className={style.listName}>
              <li className={style.text}>Осталось</li>
              <li className={style.text}>Употреблено</li>
              <li className={style.text}>Дневная норма</li>
              <li className={style.text}>n% от нормы</li>
            </ul>
            <ul className={style.list}>
              <li className={style.text}>{kcalLeft}</li>
              <li className={style.text}>{kcalConsumed}</li>
              <li className={style.text}>{dailyRate}</li>
              <li className={style.text}>{percentsOfDailyRate}</li>
            </ul>
          </div>
        </div>
        <div className={style.meny}>
          <h2 className={style.title}>Нерекомендуемые продукты</h2>
          <div className={style.products}>
            <p className={style.defaultText}>хлебобулочные изделия и тп</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
