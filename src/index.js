import React, {useState} from "react";
import ReactDOM from "react-dom";
import './assets/styles.css';

import RegAuth from './components/RegAuth'; // окно регистрации, авторизации, восстановления аккаунта
import ChooseCharacter from './components/ChooseCharacter'; // окно выбора персонажа
import CreateCharacter from './components/CreateCharacter'; // окно создания персонажа
import SpawnPoint from './components/SpawnPoint'; // окно выбора места спавна

import Range from './components/Range';

function MainBrowser(){
    const [interfaceId, setInterfaceId] = useState('CREATE_CHARACTER'); // экран интерфейса, изначально REG_AUTH - окно регистрации/авторизации
    return(
        <>
            {
                interfaceId == 'REG_AUTH' && (
                    <RegAuth />
                )
            }
            {
                interfaceId == "CREATE_CHARACTER" && (
                    <CreateCharacter />
                )
            }
            {
                interfaceId == 'CHOOSE_CHARACTER' && (
                    <ChooseCharacter />
                )
            }
            {
                interfaceId == 'SPAWN_POINT' && (
                    <SpawnPoint />
                )
            }
            {
                interfaceId == 'RANGE' && (
                    <Range />
                )
            }
        </>
    )
}

ReactDOM.render(<MainBrowser />, document.querySelector("#root"));