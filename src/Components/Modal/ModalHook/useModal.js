import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../redux/modal/modalActions";
import { openModalSelector } from "../../../redux/modal/modalSelectors";

function useModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector(openModalSelector);
  const toggle = useCallback(() => dispatch(openModal()), [dispatch]);

  const onHandleEscape = useCallback(
    event => {
      if (event.code === "Escape") toggle();
    },
    [toggle]
  );

  useEffect(
    () => {
      if (isOpen) window.addEventListener("keydown", onHandleEscape);
      return () => {
        window.removeEventListener("keydown", onHandleEscape);
      };
    },
    [onHandleEscape, isOpen]
  );
  return { isOpen, toggle };
}

export default useModal;
