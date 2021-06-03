import React from "react";
import { useSelector } from "react-redux";
import DiaryPage from "../Components/diary/Diary";
import Loader from "../Components/loader/Loader";
import { getLoader } from "../redux/loading/loaderSelectors";

const Diary = () => {
  const loading = useSelector(getLoader);

  return (
    <>
      {!loading ? (
        <>
          <DiaryPage />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Diary;
