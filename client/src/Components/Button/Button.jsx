import React from "react";
import styles from "./Button.module.scss";
const Button = props => {
    const {text, onClick} = props;
    let color;
    if (props.grayDark) color = styles.grayDark;
    if (props.blue) color = styles.blue;
    return (
        <button className={`${styles.expandsButton} ${color} btn`} onClick={onClick}>{text}</button>
    )
}

export default Button;