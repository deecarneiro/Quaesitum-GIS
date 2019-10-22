import React, { useState } from "react";
import styles from "./DropDownButton.module.scss";
import arrow from "../../assets/images/seta-para-baixo.svg";

const DropDownButton = props => {
    const { icon, title } = props;

    return (
        <div className="dropdown">
                   <button className={` ${styles.btn} bg-white img  btn dropdown-toggle`} data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false" id="dropdownMenu" >
                        <img src={icon} />
                        {title}</button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenu">
             {props.children}
            </div>
        </div>

    )
}

export default DropDownButton;