import React from "react";
import { useSelector } from "react-redux";
import { authorizationSelector } from "../../redux/auth/authSelectors";
import {
  getAllProdSelector,
  // getDaylyRateSelector,
  getSummariesSelector,
} from "../../redux/daily-rate/dailySelectors";
import // getInfoForDaySelector,
// getLocalDaySelector,
"../../redux/day/daySelectors";
import style from "./Summary.module.css";

const Summary = () => {
  // const dailyRate = useSelector(getDaylyRateSelector);
  const summaries = useSelector(getSummariesSelector);
  const notAllProd = useSelector(getAllProdSelector);
  // const { date } = useSelector(getLocalDaySelector);

  // const infoForDay = useSelector(getInfoForDaySelector);
  const authorization = useSelector(authorizationSelector);
  // const { date, kcalLeft, kcalConsumed, percentsOfDailyRate } = summaries;
  // const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } = infoForDay;

  const getData = () => {
    // console.log(new Date(item.date));
    // console.log(new Date("2021-05-27"));
    return summaries
      ? summaries.find((item) => {
          console.log(Date.now(item.date));
          console.log(Date.now("2021-05-27"));
          return Date.now(item.date) === Date.now("2021-05-27");
        })
      : null;
  };

  return authorization ? (
    <>
      <div className={style.container}>
        <div className={style.summary}>
          <h2 className={style.title}>
            Сводка за {getData()?.date || Date.now()}
          </h2>
          <div className={style.statistics}>
            <ul className={style.listName}>
              <li className={style.text}>Осталось</li>
              <li className={style.text}>Употреблено</li>
              <li className={style.text}>Дневная норма</li>
              <li className={style.text}>n% от нормы</li>
            </ul>
            <ul className={style.list}>
              <li className={style.text}>{getData()?.kcalLeft || 0}</li>
              <li className={style.text}>{getData()?.kcalConsumed || 0}</li>
              <li className={style.text}>{getData()?.dailyRate || 0}</li>
              <li className={style.text}>
                {getData()?.percentsOfDailyRate || 0}
              </li>
            </ul>
          </div>
        </div>
        <div className={style.meny}>
          <h2 className={style.title}>Нерекомендуемые продукты</h2>
          <div className={style.products}>
            <p className={style.defaultText}>
              {notAllProd
                ? notAllProd
                : "Здесь будет отображаться, что кушать запрещено!"}
            </p>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Summary;
