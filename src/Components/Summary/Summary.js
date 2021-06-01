import React from "react";
import style from "./Summary.module.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { authorizationSelector } from "../../redux/auth/authSelectors";
import {
  getAllProdSelector,
  getSummariesSelector,
} from "../../redux/daily-rate/dailySelectors";

import {
  getLocalDaySelector,
  getSummariesForDay,
} from "../../redux/day/daySelectors";

const Summary = () => {
  const { pathname } = useLocation();
  const authorization = useSelector(authorizationSelector);
  // const summariesDalyRate = useSelector(getSummariesSelector);
  // const selectedDate = useSelector(getLocalDaySelector);
  // console.log("summariesDalyRate for CALCULATOR", summariesDalyRate);

  // const daySummary = useSelector(getSummariesForDay);
  // console.log("daySummary for DIARY", daySummary);

  // const notAllProd = useSelector(getAllProdSelector);
  // const notAllProdSlice = notAllProd?.slice(0, 3);

  // const { date, kcalLeft, kcalConsumed, percentsOfDailyRate } = summaries;
  // const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } = infoForDay;

  // const getDataSelectedDate = () => {
  //   const values = {};
  //   for (const char of Object.keys(daySummary)) {
  //     values[char] = daySummary[char];
  //   }
  //   return values;
  // };
  // console.log(getDataSelectedDate());

  const dateFormat = require("dateformat");
  const now = new Date();
  const todayDate = dateFormat(now, "isoDate");

  // const getData = () => {
  //   // console.log(new Date(item.date));
  //   // console.log(new Date("2021-05-27"));
  //   return pathname === "/diary"
  //     ? daySummary?.find((item) => {
  //         // console.log(Date.now(item.date));
  //         // console.log(Date.now("2021-05-27"));
  //         return Date.now(item.date) === todayDate;
  //       })
  //     : summariesDalyRate?.find((item) => {
  //         // console.log(Date.now(item.date));
  //         // console.log(Date.now("2021-05-27"));
  //         return Date.now(item.date) === todayDate;
  //       });
  // };
  // console.log(getData());

  return authorization ? (
    <>
      <div className={style.container}>
        <div className={style.summary}>
          <h2 className={style.title}>Сводка за {}</h2>
          <div className={style.statistics}>
            <ul className={style.listName}>
              <li className={style.text}>Осталось</li>
              <li className={style.text}>Употреблено</li>
              <li className={style.text}>Дневная норма</li>
              <li className={style.text}>n% от нормы</li>
            </ul>
            <ul className={style.list}>
              <li className={style.text}>{}</li>
              <li className={style.text}>{}</li>
              <li className={style.text}>{}</li>
              <li className={style.text}>
                {/* {Math.round(percentsOfDailyRate) || 0} */}
              </li>
            </ul>
          </div>
        </div>
        <div className={style.meny}>
          <h2 className={style.title}>Нерекомендуемые продукты</h2>
          <div className={style.products}>
            <ul className={style.defaultText}>
              {/* {notAllProdSlice
                ? notAllProdSlice.map((item) => <li key={item}>{item}</li>)
                : "Здесь будет отображаться, что кушать запрещено!"} */}
            </ul>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Summary;
