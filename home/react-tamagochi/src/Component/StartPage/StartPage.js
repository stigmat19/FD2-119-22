import React from "react";
import {Link} from "react-router-dom";
import appPaths from "../configs/appPaths";

const StartPage = () => {
    return (
        <>
            <h3>Стартовый экран</h3>
            <ul>
                <li>
                    <Link to={appPaths.GAME}>Game</Link>
                </li>
                <li>
                    <Link to={appPaths.SETTINGS}>Settings</Link>
                </li>
                <li>
                    <Link to={appPaths.INDEX}>Exit</Link>
                </li>
            </ul>
        </>

    )
}

export default StartPage;