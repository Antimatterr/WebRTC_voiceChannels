import React from "react";
import styles from "./Button.module.css";

function Button({ text, onclick }) {
  return (
    <div>
      <button onClick={onclick} className={styles.button}>
        <span>{text}</span>
        <img
          className={styles.arrow}
          src="/images/arrow_right.png"
          alt="arrow"
        />
      </button>
    </div>
  );
}

export default Button;
