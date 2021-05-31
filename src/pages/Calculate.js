import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useModal from "../Components/Modal/ModalHook/useModal";
import { authorizationSelector } from "../redux/auth/authSelectors";

import { getDailyRateOperation } from "../redux/daily-rate/dailyOperations";
import styles from "./Calculate.module.css";

const initialState = {
  height: "",
  age: "",
  weight: "",
  desiredWeight: "",
  bloodType: " ",
};
const Calculate = () => {
  const { toggle } = useModal();
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const authorization = useSelector(authorizationSelector);

  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(getDailyRateOperation(state));
    !authorization && toggle();
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form__box}>
          <form className={styles.form} onSubmit={handleFormSubmit}>
            <h2 className={styles.title}>Узнай свою суточную норму калорий</h2>
            <div className={styles.inputWrapper}>
              <div className={styles.inputBlock}>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    placeholder=" "
                    type="text"
                    name="height"
                    value={state.height}
                    onChange={handleinputChange}
                  />
                  <p className={styles.labelValue}>Рост*</p>
                </label>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    placeholder=" "
                    type="text"
                    name="age"
                    onChange={handleinputChange}
                    value={state.age}
                  />
                  <p className={styles.labelValue}>Возраст*</p>
                </label>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    placeholder=" "
                    type="text"
                    name="weight"
                    onChange={handleinputChange}
                    value={state.weight}
                  />
                  <p className={styles.labelValue}>Текущий вес*</p>
                </label>
              </div>
              <div className={styles.inputBlock}>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    placeholder=" "
                    type="text"
                    name="desiredWeight"
                    onChange={handleinputChange}
                    value={state.desiredWeight}
                  />
                  <p className={styles.labelValue}>Желаемый вес*</p>
                </label>
                <div className={styles.radioGroupContainer}>
                  <p className={styles.radioTitle}>Группа крови *</p>
                  <div className={styles.radioWrapper}>
                    <input
                      type="radio"
                      id="first"
                      name="bloodType"
                      value="1"
                      onChange={handleinputChange}
                      checked={state.bloodType === "1"}
                    />
                    <label htmlFor="first" className={styles.radioLabel}>
                      1
                    </label>
                    <input
                      type="radio"
                      id="second"
                      name="bloodType"
                      value="2"
                      onChange={handleinputChange}
                      checked={state.bloodType === "2"}
                    />
                    <label htmlFor="second" className={styles.radioLabel}>
                      2
                    </label>
                    <input
                      type="radio"
                      id="third"
                      name="bloodType"
                      value="3"
                      onChange={handleinputChange}
                      checked={state.bloodType === "3"}
                    />
                    <label htmlFor="third" className={styles.radioLabel}>
                      3
                    </label>
                    <input
                      type="radio"
                      id="fourth"
                      name="bloodType"
                      value="4"
                      onChange={handleinputChange}
                      checked={state.bloodType === "4"}
                    />
                    <label htmlFor="fourth" className={styles.radioLabel}>
                      4
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.button} type="submit">
              Похудеть
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Calculate;

// class Calculate extends Component {
//   state = {
//     height: "",
//     age: "",
//     currentWeight: "",
//     desiredWeight: "",
//     bloodType: " ",
//   };
// handleinputChange = (e) => {
//   const { name, value } = e.target;
//    setState({
//     [name]: value,
//   });
// };
// handleFormSubmit = (e) => {
//   e.preventDefault();
//   const dispatch = useDispatch();
//   dispatch(getDailyRateOperation);
//   // console.log( state);
// };
//   render() {
//     return (
// <>
//   <div className={styles.container}>
//     <div className={styles.form__box}>
//       <form className={styles.form} onSubmit={ handleFormSubmit}>
//         <h2 className={styles.title}>
//           Узнай свою суточную норму калорий
//         </h2>
//         <div className={styles.inputWrapper}>
//           <div className={styles.inputBlock}>
//             <label className={styles.label}>
//               <input
//                 className={styles.input}
//                 placeholder=" "
//                 type="text"
//                 name="height"
//                 value={ state.height}
//                 onChange={ handleinputChange}
//
//               />
//               <p className={styles.labelValue}>Рост*</p>
//             </label>
//             <label className={styles.label}>
//               <input
//                 className={styles.input}
//                 placeholder=" "
//                 type="text"
//                 name="age"
//                 onChange={ handleinputChange}
//                 value={ state.age}
//
//               />
//               <p className={styles.labelValue}>Возраст*</p>
//             </label>
//             <label className={styles.label}>
//               <input
//                 className={styles.input}
//                 placeholder=" "
//                 type="text"
//                 name="currentWeight"
//                 onChange={ handleinputChange}
//                 value={ state.currentWeight}
//
//               />
//               <p className={styles.labelValue}>Текущий вес*</p>
//             </label>
//           </div>
//           <div className={styles.inputBlock}>
//             <label className={styles.label}>
//               <input
//                 className={styles.input}
//                 placeholder=" "
//                 type="text"
//                 name="desiredWeight"
//                 onChange={ handleinputChange}
//                 value={ state.desiredWeight}
//
//               />
//               <p className={styles.labelValue}>Желаемый вес*</p>
//             </label>
//             <div className={styles.radioGroupContainer}>
//               <p className={styles.radioTitle}>Группа крови *</p>
//               <div className={styles.radioWrapper}>
//                 <input
//                   type="radio"
//                   id="first"
//                   name="bloodType"
//                   value="1"
//                   onChange={ handleinputChange}
//                   checked={ state.bloodType === "1"}
//
//                 />
//                 <label htmlFor="first" className={styles.radioLabel}>
//                   1
//                 </label>
//                 <input
//                   type="radio"
//                   id="second"
//                   name="bloodType"
//                   value="2"
//                   onChange={ handleinputChange}
//                   checked={ state.bloodType === "2"}
//
//                 />
//                 <label htmlFor="second" className={styles.radioLabel}>
//                   2
//                 </label>
//                 <input
//                   type="radio"
//                   id="third"
//                   name="bloodType"
//                   value="3"
//                   onChange={ handleinputChange}
//                   checked={ state.bloodType === "3"}
//
//                 />
//                 <label htmlFor="third" className={styles.radioLabel}>
//                   3
//                 </label>
//                 <input
//                   type="radio"
//                   id="fourth"
//                   name="bloodType"
//                   value="4"
//                   onChange={ handleinputChange}
//                   checked={ state.bloodType === "4"}
//
//                 />
//                 <label htmlFor="fourth" className={styles.radioLabel}>
//                   4
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button className={styles.button} type="submit">
//           Похудеть
//         </button>
//       </form>
//     </div>
//   </div>
// </>
//     );
//   }
// }

// export default Calculate;
