import React, { Component } from "react";
import styles from "./Calculate.module.css";

class Calculate extends Component {
  state = {
    height: "",
    age: "",
    currentWeight: "",
    desiredWeight: "",
    bloodType: " ",
  };
  handleinputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.form__box}>
            <form className={styles.form} onSubmit={this.handleFormSubmit}>
              <h2 className={styles.title}>
                Узнай свою суточную норму калорий
              </h2>
              <div className={styles.inputWrapper}>
                <div className={styles.inputBlock}>
                  <label className={styles.label}>
                    <input
                      className={styles.input}
                      placeholder=" "
                      type="text"
                      name="height"
                      value={this.state.height}
                      onChange={this.handleinputChange}
                      required
                    />
                    <p className={styles.labelValue}>Рост*</p>
                  </label>
                  <label className={styles.label}>
                    <input
                      className={styles.input}
                      placeholder=" "
                      type="text"
                      name="age"
                      onChange={this.handleinputChange}
                      value={this.state.age}
                      required
                    />
                    <p className={styles.labelValue}>Возраст*</p>
                  </label>
                  <label className={styles.label}>
                    <input
                      className={styles.input}
                      placeholder=" "
                      type="text"
                      name="currentWeight"
                      onChange={this.handleinputChange}
                      value={this.state.currentWeight}
                      required
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
                      onChange={this.handleinputChange}
                      value={this.state.desiredWeight}
                      required
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
                        onChange={this.handleinputChange}
                        checked={this.state.bloodType === "1"}
                        required
                      />
                      <label for="first" className={styles.radioLabel}>
                        1
                      </label>
                      <input
                        type="radio"
                        id="second"
                        name="bloodType"
                        value="2"
                        onChange={this.handleinputChange}
                        checked={this.state.bloodType === "2"}
                        required
                      />
                      <label for="second" className={styles.radioLabel}>
                        2
                      </label>
                      <input
                        type="radio"
                        id="third"
                        name="bloodType"
                        value="3"
                        onChange={this.handleinputChange}
                        checked={this.state.bloodType === "3"}
                        required
                      />
                      <label for="third" className={styles.radioLabel}>
                        3
                      </label>
                      <input
                        type="radio"
                        id="fourth"
                        name="bloodType"
                        value="4"
                        onChange={this.handleinputChange}
                        checked={this.state.bloodType === "4"}
                        required
                      />
                      <label for="fourth" className={styles.radioLabel}>
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
  }
}

export default Calculate;
