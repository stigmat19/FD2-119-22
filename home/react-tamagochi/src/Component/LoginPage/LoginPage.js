import React from 'react';
import appPaths from "../configs/appPaths";
import {Link} from "react-router-dom";

const LoginPage = () => {
    return(
        <>
            <h1>LoginPage</h1>

            <Link to={appPaths.START}>Start</Link>
        </>

    )
}

export default LoginPage;