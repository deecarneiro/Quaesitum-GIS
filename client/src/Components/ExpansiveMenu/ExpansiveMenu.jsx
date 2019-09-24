import React, { useState } from "react";
import styles from "./ExpansiveMenu.module.scss";
import arrow from "../../assets/images/seta-para-baixo.svg";

const ExpansiveMenu = props => {
    const { title } = props;
    const [show, setShow] = useState(false);

    const toggleOptions = () => setShow(!show);
    return (
        <div className={styles.menu}>
            <div className={styles.header} onClick={toggleOptions}>
                <h5>{title}</h5>
                <img className={styles.icon} src={arrow} alt="_" />
            </div>
            <div className={styles.optionsContent}>
                {show && props.children}
            </div>
        </div>
    )
}

export default ExpansiveMenu;