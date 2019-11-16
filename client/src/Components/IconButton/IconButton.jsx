import React from 'react';
import styles from "./IconButton.module.scss";

const IconButton = (props) => {
    const { icon, title, onClick } = props;
    return(
        <button className={`btn bg-white img ${styles.btn}`} onClick={onClick}><img src={icon} />{title}</button>
    )
}
export default IconButton;