import React, {useState} from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import './assets/styles.css';

import RegAuth from './components/RegAuth'; // окно регистрации, авторизации, восстановления аккаунта

function MainBrowser(){
    const [interfaceId, setInterfaceId] = useState(0); // экран интерфейса, изначально 0 - окно регистрации
    return(
        <>
            {
                interfaceId == 0 && (
                    <RegAuth />
                )
            }
        </>
    )
}

ReactDOM.render(<MainBrowser />, document.querySelector("#root"));