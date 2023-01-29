import {Route, Routes} from "react-router-dom";

import './App.css';

import StartPage from "./Component/StartPage/StartPage";
import GamePage from "./Component/GamePage/GamePage";
import SettingsPage from "./Component/SettingsPage/SettingsPage";
import LoginPage from "./Component/LoginPage/LoginPage";
import appPaths from "./Component/configs/appPaths";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={appPaths.INDEX} element={<LoginPage />} />
            <Route path={appPaths.START} element={<StartPage />} />
            <Route path={appPaths.GAME} element={<GamePage />} />
            <Route path={appPaths.SETTINGS} element={<SettingsPage />} />
        </Routes>
    </div>
  );
}

export default App;
