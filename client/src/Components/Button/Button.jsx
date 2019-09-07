import React from "react";
import styles from "./Button.module.scss";
const Button = props => {
    const text = props.text;
    let color;
    if (props.grayDark) color = styles.grayDark;
    return (
        <button className={`${styles.expandsButton} ${color} btn`} >{text}</button>
    )
}

export default Button;