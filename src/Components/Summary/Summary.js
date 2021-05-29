import React from "react";
import style from "./Summary.module.css";

const Summary = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.summary}>
          <h2 className={style.title}>Сводка за </h2>
          <div className={style.statistics}>
            <ul className={style.listName}>
              <li className={style.text}>Осталось</li>
              <li className={style.text}>Употреблено</li>
              <li className={style.text}>Дневная норма</li>
              <li className={style.text}>n% от нормы</li>
            </ul>
            <ul className={style.list}>
              <li className={style.text}>0</li>
              <li className={style.text}>0</li>
              <li className={style.text}>0</li>
              <li className={style.text}>0</li>
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
