import React from 'react';
import styles from "./MapButton.module.scss";


const MapButton = (props) => {
    const { icon, title, side } = props;


    return(
        <button className={styles.btn} class="btn bg-white img"><img src={icon} />{title}</button>
    )
}
export default MapButton;