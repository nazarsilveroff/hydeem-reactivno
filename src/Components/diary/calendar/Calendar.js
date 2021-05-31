import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../calendar/Calendar.module.css";

import "react-datepicker/dist/react-datepicker-cssmodules.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
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
