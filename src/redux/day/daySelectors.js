export const getInfoForDaySelector = (state) => state.infoForDay;
export const getLocalDaySelector = (state) => state.selectedDate;
export const getDaySummarySelector = (state) =>
  state.infoForDay.newSummary || state.infoForDay.daySummary;
export const getSelectedDayString = (state) => state.selectedDate.date;
export const getEatenProducts = (state) => state.eatenProducts;
export const getDayId = (state) => state.selectedDate.id;
