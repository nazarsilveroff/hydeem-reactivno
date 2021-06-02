import React, {useState} from "react";
import styles from "./DiaryForm.module.css";
import stylesBtn from "../diaryProductList/DiaryProductList.module.css";
import useWindowSize from "../diaryHook/UseDiary";
import {useDispatch, useSelector} from "react-redux";
import {getSearchProductOperation} from "../../../redux/product/productOperations";
import {debounce} from "debounce";
import {getSearchProductsSelector} from "../../../redux/product/productSelectors";
import {getLocalDaySelector} from "../../../redux/day/daySelectors";
import {addEatenProductOperation} from "../../../redux/day/dayOperations";

const initialState = {
    selected: true,
    product: "",
    date: "",
    id: "",
    query: "",
    weight: 0,
};
const DiaryForm = () => {
    const [state, setState] = useState(initialState);
    const dispatch = useDispatch();
    const products = useSelector(getSearchProductsSelector);
    const selectedDate = useSelector(getLocalDaySelector);

    // console.log(state);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEatenProductOperation({date: state.date, productId: state.id, weight: state.weight}))
        document.querySelector('input[name=search]').value = ""
    };

    const onHandleChange = (e) => {
        if (e.target.value && e.target.name === "search") {
            setState((prevState) => ({
                ...prevState,
                selected: !prevState.selected,
                query: e.target.value,
                date: selectedDate.date,
            }));
            e.target.value.length > 2 &&
            dispatch(getSearchProductOperation(state.query));
        } else if (e.target.value && e.target.name === "weight") {
            setState((prevState) => ({
                ...prevState,
                weight: Number(e.target.value),
            }));
        }
    };

    const handleProduct = (e) => {
        setState((prevState) => ({
            ...prevState,
            selected: !prevState.selected,
            product: e.target.textContent,
            id: e.target.id,
        }));
        document.querySelector('input[name=search]').value = e.target.textContent
    };

    let size = useWindowSize();
    return (
        <>
            <form onSubmit={onHandleSubmit} className={styles.diaryForm}>
                <input
                    name="search"
                    onChange={debounce(onHandleChange, 500)}
                    className={styles.diaryInput}
                    type="text"
                    placeholder="Введите название продукта"
                    autoComplete="off"
                    required
                />
                <ul className={styles.productResultList} id="products">
                    {products.map(
                        (item) =>
                            state.selected && (
                                <li
                                    className={styles.productResultListItem}
                                    id={item._id}
                                    key={item._id}
                                    onClick={handleProduct}
                                >
                                    {item.title.ru}
                                </li>
                            )
                    )}
                </ul>
                <input
                    onChange={onHandleChange}
                    name="weight"
                    className={styles.diaryInput}
                    type="number"
                    placeholder="Граммы"
                    required
                />
                <button
                    type="submit"
                    className={
                        size.width < 768
                            ? styles.diaryButtonModal
                            : stylesBtn.diaryButtonRounded
                    }
                >
                    {size.width < 768 ? "Добавить" : "+"}
                </button>
            </form>
        </>
    );
};

export default DiaryForm;
