import React, { useState } from "react";
import styles from "./ExpansiveMenu.module.scss";

const ExpansiveMenu = props => {
    const { title, icon, options } = props;
    const [showOptions, setShowOptions] = useState(styles.displayNone);

    const toogleShowOptions = showOptions == "" ? setShowOptions(styles.displayNone) : setShowOptions("");

    const generateOptions = options.map((option) => <p>{option.title}</p>);

    return (
        <>
            <div className={styles.header} onClick={toogleShowOptions}>
                <h5>{title}</h5>
                <img src={icon} alt="_" />
            </div>
            <div className={`${styles.optionsContent}`}>
                {generateOptions}
            </div>
        </>
    )
}

export default ExpansiveMenu;