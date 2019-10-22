import React from "react";
import styles from "./Login.module.scss";
import Enter from "./Enter/Enter";
import Register from "./Register/Register";
import EditProfile from "./EditProfile/EditProfile";

const Login = (props) => {
    const option = props.enter;
    const enter = option === "enter" ? true : false;
    const editProfile = option === "editProfile" ? true : false;
    
    return (
        <div className={styles.content}>
            <div className={styles.cardBody}>
                {!option && <Register />}
                {enter && <Enter />}
                {editProfile && <EditProfile />}
            </div>
        </div>
    )
}

export default Login;