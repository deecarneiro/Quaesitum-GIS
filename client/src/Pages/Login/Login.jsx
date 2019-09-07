import React from "react";
import styles from "./Login.module.scss";
import Enter from "./Enter/Enter";
import Register from "./Register/Register";

const Login = (props) => {
    const option = props.enter;
    return(
        <div className={styles.content}>
            <div className={styles.cardBody}>
                {option && <Enter/>}
                {!option && <Register/>}
            </div>
        </div>
    )
}

export default Login;