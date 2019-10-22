import React from 'react';
import styles from "./IconButton.module.scss";


const MapButton = (props) => {
    const { icon, title } = props;


    return(
        <button className={`btn bg-white img ${styles.btn}`}><img src={icon} />{title}</button>
    )
}
export default MapButton;