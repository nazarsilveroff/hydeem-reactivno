import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../calendar/Calendar.module.css";

import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { useDispatch } from "react-redux";
import { getSelectedDay } from "../../../redux/day/dayActions";
import { getSummaryForDayOperation } from "../../../redux/day/dayOperations";

const Calendar = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const dateFormat = require("dateformat");
  const selectDate = dateFormat(startDate, "isoDate");
  useEffect(() => {
    dispatch(getSelectedDay(selectDate));
    dispatch(getSummaryForDayOperation());
  }, [dispatch, startDate, selectDate]);

  return (
        <DatePicker
            className={styles.datePicker}
            selected={startDate}
            dateFormat="dd.MM.yyyy"
            onChange={(date) => setStartDate(date)}
        />
  );
};

export default Calendar;
