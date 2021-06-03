import React from "react";
import style from "./Summary.module.css";
import { useSelector } from "react-redux";
import { authorizationSelector } from "../../redux/auth/authSelectors";

import {
  getDaySummarySelector,
  getInfoForDaySelector,
  getSelectedDayString,
} from "../../redux/day/daySelectors";
import { userNotAllProd } from "../../redux/user/userSelectors";

const Summary = () => {
  const authorization = useSelector(authorizationSelector);
  const selectedDay = useSelector(getSelectedDayString);
  const defaultData = useSelector(getInfoForDaySelector);
  const daySummary = useSelector(getDaySummarySelector);
  const notAllProd = useSelector(userNotAllProd);

  return authorization ? (
    <>
      <div className={style.container}>
        <div className={style.summary}>
          <h2 className={style.title}>
            Сводка за {daySummary?.date || selectedDay}
          </h2>
          <div className={style.statistics}>
            <ul className={style.listName}>
              <li className={style.text}>Осталось</li>
              <li className={style.text}>Употреблено</li>
              <li className={style.text}>Дневная норма</li>
              <li className={style.text}>n% от нормы</li>
            </ul>
            <ul className={style.list}>
              <li className={style.text}>
                {Math.round(defaultData?.kcalLeft || daySummary?.kcalLeft) || 0}
              </li>
              <li className={style.text}>
                {Math.round(daySummary?.kcalConsumed) || 0}
              </li>
              <li className={style.text}>
                {Math.round(defaultData?.dailyRate || daySummary?.dailyRate) ||
                  0}
              </li>
              <li className={style.text}>
                {Math.round(daySummary?.percentsOfDailyRate) || 0}%
              </li>
            </ul>
          </div>
        </div>
        <div className={style.meny}>
          <h2 className={style.title}>Нерекомендуемые продукты</h2>
          <div className={style.products}>
            <ul className={style.defaultText}>
              {notAllProd?.length > 0
                ? notAllProd
                    ?.slice(0, 9)
                    .map((item) => <li key={item}>{item}</li>)
                : "Здесь будет отображаться, что кушать запрещено!"}
            </ul>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Summary;
